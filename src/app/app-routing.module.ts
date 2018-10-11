import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeciesRoutingModule } from './pages/species/species-routing.module';
import { SecuritysRoutingModule } from './pages/securitys/securitys-routing.module';
import { ErrorsRoutingModule } from './pages/errors/errors-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SpeciesRoutingModule,
    SecuritysRoutingModule,
    ErrorsRoutingModule
  ],
  exports: [
    SecuritysRoutingModule,
    SpeciesRoutingModule,
    ErrorsRoutingModule
  ],
  declarations: []
})
export class AppRoutingModule { }
