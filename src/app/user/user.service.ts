import {Injectable} from '@angular/core';
import {UserApiService} from './user-api.service';
import {Observable} from "rxjs/Observable";
import {User} from "./user";

@Injectable()
export class UserService {

  isUserLoggedIn: boolean;
  userAuthenticated?: boolean = false;
  users: User[];

  constructor(private userApi: UserApiService) {
  }

  getAllUsers(): Observable<User[]> {
    return this.userApi.getAllUsers();
  }

  getUser(id: number | string): Observable<User> {
    return this.userApi.getUser(id);
  }

  // authenticateUser(userName: string, password: string): boolean {
  //   this.userApi.getAllUsers().subscribe(response => {
  //     for (let i = 0; i < response.length; i++) {
  //       if (userName == response[i].user_name && password == response[i].password) {
  //         console.log("I am here");
  //         this.userAuthenticated = true;
  //       }
  //     }
  //   });
  //
  //   console.log('before seconds');
  //   setTimeout(() => {
  //   }, 5000);
  //   console.log('after seconds call');
  //   return this.userAuthenticated;
  // }

  loginUser(user: User): any {
    console.log(user);
    user.isLoggedIn = true;
    const updatedRecord: Observable<User> = this.userApi.updateUser(user);
    updatedRecord.subscribe(updatedUser => {
      this.isUserLoggedIn = updatedUser.isLoggedIn;
    });
    return this.isUserLoggedIn;
  }

  logOutUser(user: User): boolean {
    user.isLoggedIn = false;
    const updatedRecord: Observable<User> = this.userApi.updateUser(user);
    updatedRecord.subscribe(updatedUser => {
      this.isUserLoggedIn = updatedUser.isLoggedIn;
    });
    return this.isUserLoggedIn;
  }
}
