import { Component, OnInit } from '@angular/core';
import {User} from "../../user/user";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  loggedInUser : User

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.loggedInUser = this.authService.getLoggedInUser();
  }

  onLogOut(){
    this.authService.logout(this.loggedInUser);
  }
}
