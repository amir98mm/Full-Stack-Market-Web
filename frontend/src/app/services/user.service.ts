import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/users';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  SERVER_BASE_URL = 'http://127.0.0.1:8080/users/';
  ADD = this.SERVER_BASE_URL+"add";
  LOGIN = this.SERVER_BASE_URL+"login";
  UPDATE = this.SERVER_BASE_URL+"update";

  constructor(private http:HttpClient) { }

  addUser(user : User){
    return this.http.post<User>(this.ADD,user);
  }

  login(username: string, password: string) {
    return this.http.post<User>(this.LOGIN, {username, password});
  }

  updateProfile(user:User){
    return this.http.post<User>(this.UPDATE,user);
  }

}
