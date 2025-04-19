import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  IonApp,
  IonSplitPane,
  IonMenu,
  IonContent,
  IonList,
  IonListHeader,
  IonNote,
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonRouterLink,
  IonFooter,
  IonButton,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  heartOutline,
  heartSharp,
  archiveOutline,
  archiveSharp,
  bookmarkOutline,
  pawOutline,
  pawSharp,
  bookmark,
  shareOutline,
  heart,
  logOutOutline,
} from 'ionicons/icons';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [
    RouterLink,
    RouterLinkActive,
    IonApp,
    IonSplitPane,
    IonMenu,
    IonContent,
    IonList,
    IonListHeader,
    IonNote,
    IonMenuToggle,
    IonItem,
    IonIcon,
    IonLabel,
    IonRouterLink,
    IonRouterOutlet,
    IonFooter,
    IonButton,
  ],
})
export class AppComponent {
  private authService = inject(AuthService);

  public appPages = [
    // { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    { title: 'Home', url: '/home', icon: 'paw' },
    { title: 'Favoritos', url: '/liked-memes', icon: 'heart' },
    { title: 'Archivados', url: '/saved-memes', icon: 'archive' },
  ];
  constructor() {
    addIcons({
      heartOutline,
      heartSharp,
      archiveOutline,
      archiveSharp,
      pawOutline,
      pawSharp,
      bookmarkOutline,
      bookmark,
      shareOutline,
      heart,
      logOutOutline
    });
  }

  public async signOut() {
    try {
      await this.authService.signOut();
    } catch (error) {
      console.log(error);
    }
  }
}
