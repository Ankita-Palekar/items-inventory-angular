import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {Routes} from '@angular/router';
import {LoginComponent} from './login.component';


const routes: Routes = [{
  path: 'login',
  component: LoginComponent
}];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class LoginRoutingModule { }
