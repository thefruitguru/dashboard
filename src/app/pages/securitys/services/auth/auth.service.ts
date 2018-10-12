import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string;
  authProvider: any

  constructor() {
    this.authProvider = firebase.auth();
  }

  login(email: string, password: string): Observable<boolean> {
    return Observable.create(observe => {
      this.authProvider.signInWithEmailAndPassword(email, password).then(() => {
        observe.next(true);
      }).catch(() => {
        observe.next(false);
      });
    });
  }

  logout(): Observable<boolean> {
    return Observable.create((observe) => {
      this.authProvider.signOut().then(() => {
        observe.next(true);
      }).catch(() => {
        observe.next(false);
      });
    });
  }
}
