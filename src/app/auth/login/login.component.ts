import {Component, OnInit} from '@angular/core';
import {UserService} from "../../user/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  loginSuccessful: boolean;


  constructor(private userService: UserService) {
  }


  ngOnInit() {

  }

  onLogin() {
    this.loginSuccessful = this.userService.authenticateUser(this.userName, this.password);
    console.log(this.loginSuccessful);
  }


}
