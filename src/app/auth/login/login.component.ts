import {Component, OnInit} from '@angular/core';
import {UserService} from "../../user/user.service";
import {timeout} from 'q';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  loginSuccessful: boolean = false;


  constructor(private userService: UserService) {
  }


  ngOnInit() {

  }

  private authenticateUser(userName: string, password: string) {
    this.userService.getAllUsers().subscribe(users => {
      for (let i = 0; i < users.length; i++) {
        if (userName == users[i].user_name && password == users[i].password) {
          this.loginSuccessful = true;
          this.userService.loginUser(users[i]);
        }
      }
    });
  }

  onLogin() {
     this.authenticateUser(this.userName, this.password);
  }


}
