import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import {UserService} from './user.service';
import {UserApiService} from './user-api.service';
import {UserRoutingModule} from './user-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  providers: [UserService, UserApiService],
  declarations: [UserListComponent, UserDetailsComponent]
})
export class UserModule { }
