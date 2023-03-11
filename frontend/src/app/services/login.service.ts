import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './../models/users';

@Injectable({
    providedIn: 'root'
  })

export class LoginService {
  
    constructor(private http: HttpClient) { }
  
    login(username: string, password: string) {
      return this.http.post<any>('https://fakestoreapi.com/auth/login', {username, password});
    }
    
  }