import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorsModule } from './errors.module';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ErrorsModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class ErrorsRoutingModule { }
