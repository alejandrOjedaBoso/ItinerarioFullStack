import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  model ={
    name:'Alejandro',
    sotre:'',
    shippingAddress:'',
    city:''
  }
}
