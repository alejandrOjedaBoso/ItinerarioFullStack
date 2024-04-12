import { Component, OnInit, Output } from '@angular/core';
import {MachineService} from './services/machine.service.js';
import { SensorService } from '../sensores/service/sensor.service.js';
import {Machine} from './interfaces/machine.interface';
import { MessageService } from 'primeng/api';
import { Sensor } from '../sensores/interfaces/sensor.interface.js';

@Component({
  selector: 'app-maquinas',
  templateUrl: './maquinas.component.html',
  styleUrl: './maquinas.component.css',
  providers:[MessageService]
})
export class MaquinasComponent implements OnInit{
  maquinas: Machine[] = [];
  borrarVisible:boolean=false;
  //Maquina a borrar
  maquinaActual:Machine=this.maquinas[0];



  constructor(private machineService: MachineService, private messageService:MessageService, private sensorService:SensorService) { }

  ngOnInit() {
    this.loadMachines();
  }

  loadMachines(){
    this.machineService.getMachinesByToken().subscribe(
      (response) => {
        this.maquinas = response;
        
        //Traer sensores de las maquinas
        this.maquinas.forEach(machine =>{
          this.traerSensores(machine);
        });
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
        this.messageService.add({severity:'error',summary:'Error',detail:error.message});
      }
    );

  }

  updateMachine(maquina:Machine){
    this.machineService.updateMachine(maquina).subscribe(
      (response) => {
        this.loadMachines();
        this.messageService.add({severity:'success',summary:'Success',detail:'Updated successfully'});
      },
      error =>{
        this.messageService.add({severity:'error',summary:'Error',detail:error.message});
      }
    );
  }

  traerSensores(maquina:Machine):void{
      this.sensorService.getSensorByMachineUnasigned(maquina.ref).subscribe(
        (response) => {
          maquina.sensores = [...response];
        },
        error =>{
          console.error(error);
        }
      );
  }

  sensorsMachineId(maquina:Machine):void{
    console.log("chip")
    if(!maquina.sensores){
      maquina.sensores = []
    }

    for(let i=0; i<maquina.sensores.length; i++){
      const sensor = maquina.sensores[i];

      const isSensor= maquina.sensors.find((sensorVolatil, index)=>{
        if(sensor.code === sensorVolatil.code){
          return true;
        }else{
          return false
        }
      })
      
      if (isSensor){
        sensor.machineId =maquina.ref;
      }else{
        sensor.machineId = null;
      }
    }
  }
}
