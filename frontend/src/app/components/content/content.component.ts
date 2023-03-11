import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})

export class ContentComponent implements OnInit{

  clicked:boolean=false;
  products: Product[]=null;

  constructor(private http:HttpClient,private productsService:ProductService, private cartService: CartService){ }

  ngOnInit() {
    this.productsService.getProducts().subscribe(products => {
      this.products = products;
    });
  }


  backMain(){
    this.clicked=false;
  }
  quantities = {};
  myProduct:Product;
  addProductToCart(productId: number){
    console.log("adding")
    this.myProduct = {} as Product;
    this.http.get<Product>(`https://fakestoreapi.com/products/${productId}`).subscribe(productDetails => {
      this.myProduct = {} as Product; 
      this.myProduct.id = productDetails.id;
      this.myProduct.title = productDetails.title;
      this.myProduct.price = productDetails.price;
      this.myProduct.image = productDetails.image;
      this.myProduct.quantity = this.quantities[productDetails.id];
      this.cartService.addToCart(this.myProduct);
    });
  }

  

}
