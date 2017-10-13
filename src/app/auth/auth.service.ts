import {Injectable} from '@angular/core';
import {UserService} from '../user/user.service';
import {User} from '../user/user';


@Injectable()
export class AuthService {

  constructor(private userService: UserService) {
  }

  login(user: User) {
    return this.userService.loginUser(user);
  }

  logout(user: User) {
    return this.userService.logOutUser(user);
  }

}
