import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
    providedIn: 'root'
  })

export class ProductService {


    constructor(private http: HttpClient) { }
  
    getProducts(): Observable<any> {
      return this.http.get('https://fakestoreapi.com/products');
    }
    
  }