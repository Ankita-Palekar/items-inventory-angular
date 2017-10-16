import {Injectable} from '@angular/core';
import {UserService} from '../user/user.service';
import {User} from '../user/user';


@Injectable()
export class AuthService {

  constructor(private userService: UserService) {
    console.log('was here');
  }

  login(user: User) {
    console.log('logged in user');
    console.log(this.userService.loginUser(user));
    // return this.userService.loginUser(user);
    return this.userService.loginUser(user);
  }

  logout(user: User) {
    return this.userService.logOutUser(user);
  }

}
