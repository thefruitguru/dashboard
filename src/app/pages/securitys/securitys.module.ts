import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyleMaterialModule } from '../../style/style-material/style-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  imports: [
    CommonModule,
    StyleMaterialModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    AuthComponent
  ],
  declarations: [
    AuthComponent
  ]
})
export class SecuritysModule { }
