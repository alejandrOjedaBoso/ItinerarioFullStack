import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '../../material/material.module';
import { MaquinasComponent } from './maquinas/maquinas.component';
import { SensoresComponent } from './sensores/sensores.component';
import { ErrorComponent } from './maquinas/error/error.component';


@NgModule({
  declarations: [
    DashboardComponent,
    MaquinasComponent,
    SensoresComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ]
})
export class DashboardModule { }
