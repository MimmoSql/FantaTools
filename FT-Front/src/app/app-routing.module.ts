import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './utility/app.guard';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [{
  path: 'http://localhost:4200/',
  component: NavbarComponent,
  canActivate: [AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
