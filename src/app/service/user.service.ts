import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {observableToBeFn} from 'rxjs/internal/testing/TestScheduler';
import {Observable} from 'rxjs';
import {IUser} from '../user/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private URL_API = 'http://localhost:8080/users';
  constructor(private http: HttpClient) { }
  getAllUser(): Observable<any>{
    return this.http.get(this.URL_API);
  }
  create(user: IUser): Observable<any>{
      return this.http.post(this.URL_API, user);
  }

  update(user: IUser): Observable<any> {
    return this.http.put(this.URL_API + `/${user.id}`, user);
  }

  findById(id: number): Observable<any> {
    return  this.http.get(this.URL_API + `/${id}`);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/users/${id}`);
  }
}
