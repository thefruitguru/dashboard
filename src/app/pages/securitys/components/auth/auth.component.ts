import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  public erroLogin = false;

  public loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    public authService: AuthService,
    public fb: FormBuilder,
    public router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    this.erroLogin = false;
    let email = this.loginForm.get('email').value;
    let password = this.loginForm.get('password').value;

    this.authService.login(email, password).subscribe((status) => {
      if (status) {
        if (!this.authService.redirectUrl) {
          this.router.navigate(['/species']);
        } else {
          this.router.navigate([this.authService.redirectUrl]);
        }
      } else {
        this.erroLogin = true;
        this.loginForm.reset();
      }
    });
  }
}
