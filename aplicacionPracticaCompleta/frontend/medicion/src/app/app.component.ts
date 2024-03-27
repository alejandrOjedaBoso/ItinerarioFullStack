import { Component } from '@angular/core';
import {LoginService} from '../services/login.service.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  user: string|null = null;
  password: string|null = null;
  
  constructor(private loginService: LoginService){

  }
  
  login():void {
    if(this.user && this.password){
      const response = this.loginService.login(this.user, this.password).subscribe(
        response=>{
          console.log(response);
        },
        error =>{
          console.error(error);
        }
      );
      console.log(response);
    }
  }
}
