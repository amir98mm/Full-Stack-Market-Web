import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: any[];
  cartProducts: any[];
  @Input() selectedProduct: Product;
  loading = true;

  constructor(private http: HttpClient, private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getCartProducts().subscribe(products => {
      this.items = products;
      this.loading=false;
    });
  }

}
