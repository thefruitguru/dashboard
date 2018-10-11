import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
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
        this.isLoggedIn = true;
        observe.next(true);
      }).catch(() => {
        observe.next(false);
      });
    });
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
