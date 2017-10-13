import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginRoutingModule} from './login/login-routing.module';



@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  declarations: []
})
export class AuthModule { }
