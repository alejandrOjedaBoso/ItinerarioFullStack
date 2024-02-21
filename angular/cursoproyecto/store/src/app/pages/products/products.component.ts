import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { tap } from 'rxjs/operators';
import { Product } from './interfaces/product.interface';
import { ShoppingCartService } from '../../shared/components/services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products?:Product[];
  
  constructor(private productSvc:ProductService, private shoppingCartSvc:ShoppingCartService) { }
  
  ngOnInit(): void {
    this.productSvc.getProducts()
    .pipe( 
        tap(products=> this.products = products)
      )
    .subscribe();
  }

  addToCart(product:Product):void{
    console.log('Add to cart ', product);
    this.shoppingCartSvc.updateCart(product);
  }
}
