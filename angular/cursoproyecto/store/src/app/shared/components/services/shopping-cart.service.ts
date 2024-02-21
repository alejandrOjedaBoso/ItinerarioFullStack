import { Injectable } from "@angular/core";
import { Product } from "../../../pages/products/interfaces/product.interface";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable(
    {providedIn:'root'}
)

export class ShoppingCartService{
    products:Product[] = [];

    private cartSubject =new BehaviorSubject<Product[]>([]);
    private totalSubject =new BehaviorSubject<number>(0);
    private quantitySubject =new BehaviorSubject<number>(0);

    get totalAction$():Observable<number>{
        return this.totalSubject.asObservable();
    }
    get quantityAction$():Observable<number>{
        return this.quantitySubject.asObservable();
    }
    get cartAction$():Observable<Product[]>{
        return this.cartSubject.asObservable();
    }

    public updateCart(product:Product):void{
        this.addToCart(product);
        this.quantityProducts();
        this.calcTotal();
    }

    private calcTotal():void{
        const total= this.products.reduce((total,product)=> total+product.price,0);
        this.totalSubject.next(total); 
    }

    private quantityProducts():void{
        const quantity = this.products.length;
        this.quantitySubject.next(quantity);
    }

    private addToCart(product:Product):void{
        this.products.push(product);
        this.cartSubject.next(this.products);
    }
}