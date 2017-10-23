import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginRoutingModule} from './login/login-routing.module';
import { LogoutComponent } from './logout/logout.component';
import {LogoutRoutingModule} from "./logout-routing/logout-routing.module";



@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    LogoutRoutingModule
  ],
  declarations: []
})
export class AuthModule { }
