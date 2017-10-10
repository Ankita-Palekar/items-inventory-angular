import {Injectable} from '@angular/core';
import {UserApiService} from './user-api.service';
import {Observable} from "rxjs/Observable";
import {User} from "./user";

@Injectable()
export class UserService {

  constructor(private userApi: UserApiService) {
  }

  getAllUsers(): Observable<User[]> {
    return this.userApi.getAllUsers();
  }
}
