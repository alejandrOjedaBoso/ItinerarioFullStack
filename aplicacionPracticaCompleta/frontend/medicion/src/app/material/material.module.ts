import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import { PasswordModule } from 'primeng/password';


const material = [
  ButtonModule,
  InputTextModule,
  FormsModule,
  PasswordModule,
];

@NgModule({
  declarations: [],
  imports: [
    ...material,
  ],
  exports: [
    ...material,
  ],
})
export class MaterialModule { }


