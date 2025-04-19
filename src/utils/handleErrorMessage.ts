import { FirebaseError } from '@angular/fire/app';

const handleFirebaseErrorMessage = (
  error: FirebaseError,
  defaultMessage: string
): string => {
  switch (error.code) {
    case 'auth/user-not-found':
      return 'El usuario no existe';
    case 'auth/wrong-password':
      return 'La contraseña es incorrecta';
    case 'auth/email-already-in-use':
      return 'El email ya está en uso';
    case 'auth/invalid-credential':
      return 'El email o la contraseña es incorrecta';
    default:
      console.error('Firebase error not handled', error.code);
      return defaultMessage;
  }
};

export function handleErrorMessage(error: unknown) {
  let message = 'Algo salió mal';
  console.error(error);
  if (error instanceof FirebaseError) {
    message = handleFirebaseErrorMessage(error, message);
  } else if (error instanceof Error) {
    message = error.message;
  }
  return message;
}
