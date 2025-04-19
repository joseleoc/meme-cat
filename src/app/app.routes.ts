import { Routes } from '@angular/router';
import { AuthGuard } from './guard/auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'signin',
    loadComponent: () =>
      import('./pages/signin/signin.page').then((m) => m.SigninPage),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
    canActivate: [AuthGuard],
  },
  {
    path: 'saved-memes',
    loadComponent: () =>
      import('./pages/saved-memes/saved-memes.page').then(
        (m) => m.SavedMemesPage
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'liked-memes',
    loadComponent: () =>
      import('./pages/liked-memes/liked-memes.page').then(
        (m) => m.LikedMemesPage
      ),
    canActivate: [AuthGuard],
  },
];
