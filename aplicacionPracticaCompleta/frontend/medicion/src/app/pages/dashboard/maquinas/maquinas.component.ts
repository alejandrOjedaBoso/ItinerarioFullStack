import { Component, OnInit, Output } from '@angular/core';
import {MachineService} from './services/machine.service.js';
import {Machine} from './interfaces/machine.interface';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-maquinas',
  templateUrl: './maquinas.component.html',
  styleUrl: './maquinas.component.css',
  providers:[MessageService]
})
export class MaquinasComponent implements OnInit{
  maquinas: Machine[] = [];
  borrarVisible:boolean=false;
  maquinaActual:Machine=this.maquinas[0];


  constructor(private machineService: MachineService, private messageService:MessageService) { }

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

  showDeleteDialog(maquina:Machine):void{
    this.maquinaActual=maquina;
    this.borrarVisible=true;
  }
  
  deleteMachine(){
    this.machineService.deleteMachine(this.maquinaActual).subscribe(
      (response) => {
        this.maquinas.find((element:Machine)=>{
          if(element.ref === this.maquinaActual.ref){
            this.maquinas.splice(this.maquinas.indexOf(element),1);
            this.messageService.add({severity:'success',summary:'Success',detail:'Deleted successfully'});
          }
        });
      },
      error =>{
        this.messageService.add({severity:'error',summary:'Error',detail:'Error deleting'});
      }
    );

  }

  updateMachine(maquina:Machine){
    this.machineService.updateMachine(maquina).subscribe(
      (response) => {
        this.messageService.add({severity:'success',summary:'Success',detail:'Updated successfully'});
      },
      error =>{
        this.messageService.add({severity:'error',summary:'Error',detail:'Error updating'});
        console.log(error);
      }
    );
  }
}
