import { Component, inject, input, OnInit } from '@angular/core';
import { Meme, MemeService } from 'src/app/services/meme/meme.service';
import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
  ToastController,
} from '@ionic/angular/standalone';
import { handleErrorMessage } from 'src/utils/handleErrorMessage';

@Component({
  selector: 'app-meme-item',
  templateUrl: './meme-item.component.html',
  styleUrls: ['./meme-item.component.scss'],
  imports: [
    IonItem,
    IonAvatar,
    IonLabel,
    IonButton,
    IonIcon,
    IonCard,
    IonCardContent,
  ],
})
export class MemeItemComponent implements OnInit {
  private memeService = inject(MemeService);
  private toastCtrl = inject(ToastController);
  meme = input.required<Meme>();

  constructor() {}

  ngOnInit() {}

  private async showErrorToast(error: any) {
    const message = handleErrorMessage(error);
    const errorToast = await this.toastCtrl.create({
      message,
      id: 'error-toast',
      duration: 3000,
    });
    await errorToast.present();
  }

  public async likeMeme(meme: Meme) {
    try {
      await this.memeService.likeMeme(meme);
    } catch (error) {
      this.showErrorToast(error);
    }
  }

  public async saveMeme(meme: Meme) {
    try {
      await this.memeService.saveMeme(meme);
    } catch (error) {
      this.showErrorToast(error);
    }
  }

  public async shareMeme(meme: Meme) {
    try {
      await this.memeService.shareMeme(meme);
    } catch (error) {
      this.showErrorToast(error);
    }
  }
}
