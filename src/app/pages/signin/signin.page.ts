import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonItem } from '@ionic/angular/standalone';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonContent,
  IonSpinner,
  IonInput,
  MenuController,
  IonNote,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonInputPasswordToggle,
  ToastController,
} from '@ionic/angular/standalone';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { handleErrorMessage } from 'src/utils/handleErrorMessage';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonButton,
    IonSpinner,
    IonInput,
    IonNote,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonInputPasswordToggle,
    IonItem,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SigninPage implements OnInit {
  private menuCtrl = inject(MenuController);
  private toastCtrl = inject(ToastController);
  private authService = inject(AuthService);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  public isLoading = signal(false);
  public signInForm = this.fb.group({
    email: ['test@test.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });

  get email() {
    return this.signInForm.get('email');
  }

  get password() {
    return this.signInForm.get('password');
  }

  constructor() {}

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

  public async onSubmit() {
    this.signInForm.markAllAsTouched();
    if (this.signInForm.valid) {
      const { email, password } = this.signInForm.value;
      if (email == null || password == null) return;

      try {
        this.isLoading.set(true);
        this.isLoading.set(false);

        await this.authService.signInWithEmailAndPassword(email, password);
        this.router.navigate(['/home']);
      } catch (error) {
        const message = handleErrorMessage(error);
        const errorToast = await this.toastCtrl.create({
          message,
          id: 'error-toast',
          duration: 3000,
        });
        await errorToast.present();
      }
    }
  }
}
