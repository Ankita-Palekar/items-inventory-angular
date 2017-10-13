import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {User} from '../user';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: User;

  constructor(private service: UserService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const ser: Observable<User> = this.route.paramMap.switchMap((params: ParamMap) => (this.service.getUser(params.get('id'))));
    ser.subscribe(response => {
      this.user = response;
    });
  }

}
