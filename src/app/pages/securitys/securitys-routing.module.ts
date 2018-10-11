import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecuritysModule } from './securitys.module';
import { RouterModule, Routes, Router } from '@angular/router';

import { AuthComponent } from './components/auth/auth.component';

const routes: Routes = [
  { path: 'login', component: AuthComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SecuritysModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class SecuritysRoutingModule { }
