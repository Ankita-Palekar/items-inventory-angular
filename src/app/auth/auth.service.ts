import {Injectable} from '@angular/core';
import {UserService} from '../user/user.service';
import {User} from '../user/user';


@Injectable()
export class AuthService {

  isLoggedIn = false;

  constructor(private userService: UserService) {
  }

  login(user: User) {
    return this.userService.loginUser(user);
  }

  checkLoggedIn() {
    JSON.parse(localStorage.getItem('loggedInUser')) ;
    return this.isLoggedIn;
  }

  logout(user: User) {
    return this.userService.logOutUser(user);
  }

}
