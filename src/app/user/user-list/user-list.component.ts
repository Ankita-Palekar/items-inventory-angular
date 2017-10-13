import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {User} from '../user';
import {UserService} from '../user.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private service: UserService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    return this.service.getAllUsers().subscribe(response => {
      this.users = response;
    });
  }
}
