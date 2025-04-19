import { inject, Injectable } from '@angular/core';
import {
  Auth,
  authState,
  signInWithEmailAndPassword,
  User,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = inject(Auth);
  private authState$ = authState(this.auth);
  private authStateSubscription: Subscription;
  private router = inject(Router);

  constructor() {
    this.authStateSubscription = this.authState$.subscribe(
      (aUser: User | null) => {
        //handle auth state changes here. Note, that user will be null if there is no currently logged in user.
      }
    );
  }

  ngOnDestroy() {
    // when manually subscribing to an observable remember to unsubscribe in ngOnDestroy
    this.authStateSubscription.unsubscribe();
  }

  public async signInWithEmailAndPassword(email: string, password: string) {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
    } catch (error) {
      throw error;
    }
  }

  public async signOut() {
    try {
      await this.auth.signOut();
      this.router.navigateByUrl('/signin');
    } catch (error) {
      throw error;
    }
  }

  public async isAuthenticated() {
    try {
      const user = this.auth.currentUser;
      return !!user;
    } catch (error) {
      throw error;
    }
  }
}
