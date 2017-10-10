import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {User} from './user';

const API_URL = environment.apiUrl;

@Injectable()
export class UserApiService {

  constructor(private http: Http) {
  }

  public getAllUsers(): Observable<User[]> {
    return this.http.get(API_URL + '/users').map(response => response.json()).catch(this.handleError);
  }

  private handleError(error: Response | any) {
    return Observable.throw(error);
  }

}
