import { Component, OnInit } from '@angular/core';
import {SensorService} from './service/sensor.service.js';

@Component({
  selector: 'app-sensores',
  templateUrl: './sensores.component.html',
  styleUrl: './sensores.component.css'
})
export class SensoresComponent implements OnInit {
  constructor(private sensorService:SensorService){

  }
  ngOnInit(): void {
    this.sensorService.getSensorUserUnansigned().subscribe((response)=>{
      console.log(response);
    },
  error=>{
    console.log(error);
  })
  }

}
