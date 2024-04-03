import { Component, OnInit, Output } from '@angular/core';
import {MachineService} from './services/machine.service.js';
import {Machine} from './interfaces/machine.interface'

@Component({
  selector: 'app-maquinas',
  templateUrl: './maquinas.component.html',
  styleUrl: './maquinas.component.css'
})
export class MaquinasComponent implements OnInit{
  maquinas: Machine[] = [];
  @Output() errorVisible:boolean=false;
  @Output() error:any;


  constructor(private machineService: MachineService) { }

  ngOnInit() {
    this.machineService.getMachinesByToken().subscribe(
      (response) => {
        this.maquinas = response;
      },
      error =>{
        console.error(error);
      }
    );
  }
  
  deleteMachine(maquina:Machine){
    this.machineService.deleteMachine(maquina).subscribe(
      (response) => {
        this.maquinas.find((element:Machine)=>{
          if(element.ref === maquina.ref){
            this.maquinas.splice(this.maquinas.indexOf(element),1);
          }
        });
      },
      error =>{
        console.error(error);
      }
    );
  }

  updateMachine(maquina:Machine){
    this.machineService.updateMachine(maquina).subscribe(
      (response) => {
      },
      error =>{
        this.error = error;
        this.errorVisible = true;
      }
    );
  }
}
