import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import {AppRoutingModule} from './app-routing.module';
import {UserListComponent} from './user/user-list/user-list.component';
import {UserService} from './user/user.service';
import {UserApiService} from './user/user-api.service';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [UserService, UserApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
