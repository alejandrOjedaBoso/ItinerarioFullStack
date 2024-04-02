import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service.js';
import {Router} from '@angular/router';
import { MenuItem } from 'primeng/api/menuitem.js';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit  {
  sections: MenuItem[] | undefined;
  activeItem: MenuItem | undefined = {label: 'maquinas'};

  constructor(private loginService: LoginService, private router: Router){

  }
  ngOnInit(): void {
  this.loginService.checkToken().subscribe((response)=>{

    if(!response){
      this.router.navigate(['/login']);
    }
    this.sections = [{label: 'Maquinas',command: (event) =>{this.activeItem=event.item}},{label: 'Sensores',command: (event) =>{this.activeItem=event.item}}];
    this.activeItem = this.sections[0];
  },
  error=>{
    console.error(error);
  })
  }
  prueba():void{
    console.log(this.activeItem);
  }
}
