import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { HeaderPage } from 'src/app/components/header/header.page';
import { MemeListComponent } from 'src/app/components/meme-list/meme-list.component';
import { Meme, MemeService } from 'src/app/services/meme/meme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-saved-memes',
  templateUrl: './saved-memes.page.html',
  styleUrls: ['./saved-memes.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    FormsModule,
    HeaderPage,
    MemeListComponent,
  ],
})
export class SavedMemesPage implements OnInit, OnDestroy {
  private memeService = inject(MemeService);
  public memes = signal<Meme[]>([]);
  private memesSubscription: Subscription | undefined;

  constructor() {}

  ngOnInit() {
    this.memesSubscription = this.memeService.memes$.subscribe((memes) => {
      this.memes.set(Array.from(memes.values()).filter((meme) => meme.saved));
    });
  }

  ngOnDestroy() {
    this.memesSubscription?.unsubscribe();
  }
}
