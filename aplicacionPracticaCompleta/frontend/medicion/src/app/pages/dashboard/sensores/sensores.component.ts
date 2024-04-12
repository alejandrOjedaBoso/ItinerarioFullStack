import { Component, OnInit } from '@angular/core';
import {SensorService} from './service/sensor.service.js';
import {MachineService} from '../maquinas/services/machine.service.js';
import {Sensor} from './interfaces/sensor.interface.js';
import { MessageService } from 'primeng/api';
import { Machine } from '../maquinas/interfaces/machine.interface.js';


@Component({
  selector: 'app-sensores',
  templateUrl: './sensores.component.html',
  styleUrl: './sensores.component.css',
  providers:[MessageService]
})
export class SensoresComponent implements OnInit {
  sensores:Sensor[] = [];
  borrarVisible:boolean=false;
  sensorActual:Sensor=this.sensores[0];
  maquinas:Machine[]|undefined;

  constructor(private sensorService:SensorService, private messageService:MessageService, private machineService:MachineService){

  }
  ngOnInit(): void {
    this.cargarSensores()
    
  }

  cargarSensores(){
    this.sensorService.getSensorUserUnansigned().subscribe((response)=>{
      this.sensores=response;
      this.loadMachines();
    },
  error=>{
    console.log(error);
  })
  }

  updateSensor(sensor:Sensor): void {
    this.sensorService.updateSensor(sensor).subscribe(
      (response) => {
        this.cargarSensores();
        this.messageService.add({severity:'success', summary:'Mensaje', detail:'Sensor actualizado correctamente'});
      },
      error =>{
        this.messageService.add({severity:'error',summary:'Error',detail:error.message});
      }
    );
  }
  showDeleteDialog(sensor:Sensor): void {
    this.borrarVisible=true;
    this.sensorActual=sensor;
  }

  deleteSensor(): void {
    if(this.sensorActual.machineId === null){
      this.sensorService.deleteSensor(this.sensorActual).subscribe(
        (response) => {
        this.sensores.find((element:Sensor)=>{
            if(element.code === this.sensorActual.code){
              this.sensores.splice(this.sensores.indexOf(element),1);
              this.messageService.add({severity:'success', summary:'Mensaje', detail:'Sensor eliminado correctamente'});
            }});
        },
        error =>{
          this.messageService.add({severity:'error',summary:'Error',detail:error.message});
        }
      );
    }else{
      this.messageService.add({severity:'error',summary:'Error',detail:"Desvincula la maquina antes de borrar el sensor"});

    }
  }

  async loadMachines(){
    if(!this.maquinas){
      await this.machineService.getMachinesByToken().subscribe(
        (response)=>{
          this.maquinas = response;
        },
        error => {console.log(error.message);}
      );
    }
  }

}
