import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyleMaterialModule } from '../../style/style-material/style-material.module';

import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    StyleMaterialModule
  ],
  exports: [
    NotFoundComponent
  ],
  declarations: [
    NotFoundComponent
  ]
})
export class ErrorsModule { }
