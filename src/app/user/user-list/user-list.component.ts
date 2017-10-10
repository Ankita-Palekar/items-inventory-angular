import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[]

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    console.log('comes here');
    return this.userService.getAllUsers().subscribe(response => {
      this.users = response;
    });
  }

}
