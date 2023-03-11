import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProducts: Observable<Product[]>;

  constructor(private http: HttpClient) { 
    this.cartProducts = of([] as Product[]);
  }

  addToCart(product: Product): void {
    this.cartProducts = this.cartProducts.pipe(
      map(products => [...products, product])
    );
  }

  getCartProducts(): Observable<Product[]> {
    return this.cartProducts;
  }

}
