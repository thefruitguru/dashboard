import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeciesModule } from './species.module';
import { RouterModule, Routes } from '@angular/router';

import { SpeciesIndexComponent } from './components/species-index/species-index.component';
import { SpeciesListComponent } from './components/species-list/species-list.component';
import { SpeciesRegisterComponent } from './components/species-register/species-register.component';

import { AuthGuard } from '../../pages/securitys/guards/auth/auth.guard';

const routes: Routes = [
  { 
    path: 'species', 
    component: SpeciesIndexComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'list', component: SpeciesListComponent },
      { path: 'register', component: SpeciesRegisterComponent },
    ] 
  },
  { path: '', redirectTo: 'species/list', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    SpeciesModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class SpeciesRoutingModule { }
