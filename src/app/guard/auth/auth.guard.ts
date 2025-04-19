import { CanActivateFn, Route, Router, UrlSegment } from '@angular/router';

import { inject, Injectable } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  private router = inject(Router);
  private authService = inject(AuthService);
  constructor() {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated().then((isAuth) => {
      if (!isAuth) {
        this.router.navigateByUrl('/signin');
        return false;
      }
      return true;
    });
  }
}

export const authGuard: CanActivateFn = (route, state) => {
  return inject(authGuard).canActivate();
};
