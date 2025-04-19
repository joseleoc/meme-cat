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
import { Meme, MemeService } from 'src/app/services/meme/meme.service';
import { MemeListComponent } from 'src/app/components/meme-list/meme-list.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-liked-memes',
  templateUrl: './liked-memes.page.html',
  styleUrls: ['./liked-memes.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    FormsModule,
    HeaderPage,
    MemeListComponent,
  ],
})
export class LikedMemesPage implements OnInit, OnDestroy {
  private memeService = inject(MemeService);
  public memes = signal<Meme[]>([]);
  private memesSubscription: Subscription | undefined;

  constructor() {}

  ngOnInit() {
    this.memesSubscription = this.memeService.memes$.subscribe((memes) => {
      this.memes.set(Array.from(memes.values()).filter((meme) => meme.liked));
    });
  }

  ngOnDestroy() {
    this.memesSubscription?.unsubscribe();
  }
}
