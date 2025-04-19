import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, MenuController } from '@ionic/angular/standalone';
import { HeaderPage } from 'src/app/components/header/header.page';
import { MemeListComponent } from 'src/app/components/meme-list/meme-list.component';
import { Meme, MemeService } from 'src/app/services/meme/meme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    FormsModule,
    HeaderPage,
    MemeListComponent,
  ],
})
export class HomePage implements OnInit, OnDestroy {
  private menuCtrl = inject(MenuController);
  private memeService = inject(MemeService);
  memesSubscription: Subscription | undefined;
  public memes = signal<Meme[]>([]);

  constructor() {}

  ngOnInit() {
    this.menuCtrl.enable(true);
    this.memeService.getMemes();
    this.subscribeToMemes();
  }

  ngOnDestroy() {
    this.memesSubscription?.unsubscribe();
  }

  private subscribeToMemes() {
    this.memesSubscription = this.memeService.memes$.subscribe((memes) => {
      this.memes.set(Array.from(memes.values()));
    });
  }
}
