import { Component } from '@angular/core';
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
} from 'ionicons/icons';

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
  ],
})
export class AppComponent {
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
    });

    
  }
}
