import { Component } from '@angular/core';
import {LoginService} from './services/login.service.js';


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
        (response)=>{
          const token = response.token;
          localStorage.setItem('token', token);
        },
        error =>{
          console.error(error);
        }
      );
    }
  }
}
