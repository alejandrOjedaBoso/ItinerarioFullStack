import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  shipping:boolean = false;
  model ={
    name:'Alejandro',
    sotre:'',
    shippingAddress:'',
    city:'',
    store:''
  }
  stores=[{
    "id": "1",
    "name": "Park Row at Beekman St",
    "address": "38 Park Row",
    "city": "New York",
    "openingHours": "10:00 - 14:00 and 17:00 - 20:30"
},
{
    "id": "2",
    "name": "Store Alcalá",
    "address": "Calle de Alcalá, 21",
    "city": "Madrid",
    "openingHours": "10:00 - 14:00 and 17:00 - 20:30"
},
{
    "id": "3",
    "name": "Chambers and West Broadway",
    "address": "125 Chambers Street",
    "city": "New York",
    "openingHours": "10:00 - 14:00 and 17:00 - 20:30"
},
{
    "id": "4",
    "name": "Covent Garden - Russell St",
    "address": "10 Russell Street",
    "city": "London",
    "openingHours": "10:00 - 14:00 and 17:00 - 20:30"
},
{
    "id": "5",
    "name": "Monmouth St",
    "address": "11 Monmouth Street",
    "city": "London",
    "openingHours": "10:00 - 14:00 and 17:00 - 20:30"
}];

  optionDelivery(option: boolean):void{
    this.shipping=option;
  }
}
