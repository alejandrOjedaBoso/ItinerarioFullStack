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
        const total= this.products.reduce((total,product)=> total+product.price*product.qty,0);
        this.totalSubject.next(total); 
    }

    private quantityProducts():void{
        const quantity = this.products.reduce((quantity,product)=> quantity+product.qty,0);
        this.quantitySubject.next(quantity);
    }

    private addToCart(product:Product):void{
        const isProductInCart=this.products.find(id=> id.id===product.id);

        if(isProductInCart){
            isProductInCart.qty++;
        }else{
            this.products.push({...product,qty:1});
        }

        this.cartSubject.next(this.products);
    }

    resetShoppingCart():void{
        this.cartSubject.next([]);
        this.totalSubject.next(0);
        this.quantitySubject.next(0);
        this.products=[];
    }
}