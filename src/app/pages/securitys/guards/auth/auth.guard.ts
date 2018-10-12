import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  authProvider: any;

  constructor(
    public authService: AuthService,
    public router: Router
  ) {
    this.authProvider = firebase.auth();
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    let url: string = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string): Observable<boolean> {
    return Observable.create(observer => {
      this.authProvider.onAuthStateChanged(user => {
        if (user) {
          observer.next(true);
        } else {
          observer.next(false);
          this.router.navigate(['/login']);
        }
      });
    });
  }
}
