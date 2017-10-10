import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {UserListComponent} from './user/user-list/user-list.component';

const routes: Routes = [
  // {
  //   path : '',
  //   pathMatch: 'full',
  //   redirectTo: 'users'
  // },
  {
    path: 'users',
    component: UserListComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
