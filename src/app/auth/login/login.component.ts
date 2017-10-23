import {Component, OnChanges, OnInit} from '@angular/core';
import {UserService} from '../../user/user.service';
import {timeout} from 'q';
import {AuthService} from '../auth.service';
import {User} from '../../user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  userName: string;
  password: string;
  loggedInUser: User;

  constructor(private userService: UserService, private authService: AuthService) {

  }

  ngOnInit() {
    this.loggedInUser = this.authService.getLoggedInUser();
  }

  private authenticateUser(userName: string, password: string) {
    console.log(this.authService.isLoggedIn);
    if (!this.authService.isLoggedIn) {
      this.userService.getAllUsers().subscribe(users => {
        for (let i = 0; i < users.length; i++) {
          if (userName == users[i].user_name && password == users[i].password) {
            this.authService.login(users[i]);
            this.loggedInUser = users[i];
            break;
          }
        }
      });
    }
  }

  onLogin() {
    this.authenticateUser(this.userName, this.password);
  }


}
