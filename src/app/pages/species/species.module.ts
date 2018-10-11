import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyleMaterialModule } from '../../style/style-material/style-material.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SpeciesIndexComponent } from './components/species-index/species-index.component';
import { SpeciesListComponent } from './components/species-list/species-list.component';
import { SpeciesRegisterComponent } from './components/species-register/species-register.component';

@NgModule({
  imports: [
    CommonModule,
    StyleMaterialModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    SpeciesIndexComponent,
    SpeciesListComponent,
    SpeciesRegisterComponent
  ],
  declarations: [
    SpeciesIndexComponent,
    SpeciesListComponent,
    SpeciesRegisterComponent
  ]
})
export class SpeciesModule { }
