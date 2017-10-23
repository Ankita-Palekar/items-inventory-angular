import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {LogoutComponent} from "../logout/logout.component";

const routes: Routes = [{
  path: 'logout',
  component: LogoutComponent
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule],
  declarations: []
})
export class LogoutRoutingModule { }
