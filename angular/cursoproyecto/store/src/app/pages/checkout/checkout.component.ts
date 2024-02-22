import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/components/services/data.service';
import { delay, switchMap, tap } from 'rxjs';
import { Store } from '../../shared/components/interfaces/stores.interface';
import { NgForm } from '@angular/forms';
import { Details } from '../../shared/components/interfaces/order.interface';
import { Product } from '../products/interfaces/product.interface';
import { ShoppingCartService } from '../../shared/components/services/shopping-cart.service';
import { Router } from '@angular/router';
import { ProductService } from '../products/services/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit{
  shipping:boolean = false;
  cart:Product[]=[];
  model ={
    name:'Alejandro',
    sotre:'',
    shippingAddress:'',
    city:'',
    store:''
  }
  stores:Store[]=[];

  constructor(private dataSvc:DataService, private shoppingCartSvc:ShoppingCartService,private router:Router,private productSvc:ProductService){
    this.checkIfCartIsEmpty();
  }
  ngOnInit(): void {
    this.getStores();
    this.getDataCart();
    this.prepareDetails();
  }
  optionDelivery(option: boolean):void{
    this.shipping=option;
  }

  onSubmit({value: formData}:NgForm):void{
    console.log(formData);
    const data={
      ...formData,
      date:this.getCurrentDate(),
      pickup:this.shipping,

    }

    this.dataSvc.saveOrder(data).pipe(tap(res=> console.log("order -> "+res)),
    switchMap( ({id:orderId})=> {
      const details=this.prepareDetails();
      return this.dataSvc.saveDetailsOrder({details,orderId});
    }),
    tap(res=> this.router.navigateByUrl("/checkout/thank-you-page")),
    delay(2000),
    tap(()=> this.shoppingCartSvc.resetShoppingCart())
    ).subscribe();
    
  }

  getStores():void{
    this.dataSvc.getStores().pipe(tap((stores:Store[]) => this.stores=stores)).subscribe();
  }

  private getCurrentDate():string{
    return new Date().toLocaleDateString();
  }

  private prepareDetails(){
    const details:Details[] = [];
    this.cart.forEach((product:Product)=>{
      const{id:productId,name:productName,qty:quantity,stock} = product;
      const updateStock=(stock-quantity);

      this.productSvc.updateStock(productId,updateStock)
      .pipe(
        tap(()=> details.push({productId,productName,quantity}))
      )
      .subscribe()
    })

    return details;
  }

  private getDataCart():void{
    this.shoppingCartSvc.cartAction$.pipe(tap((products: Product[])=>this.cart=products)).subscribe();
  }

  private checkIfCartIsEmpty():void{
    this.shoppingCartSvc.cartAction$
    .pipe(tap((products: Product[])=>{
      if(Array.isArray(products) && products.length===0){
        this.router.navigate(["/products"]);
      }
    }))
    .subscribe();
  }
}
