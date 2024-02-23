import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MaterialDemo';
  notification:number=0;
  showSpinner:boolean=false;
  opened:boolean=false;

  loadData(){
    this.showSpinner=true;
    setTimeout(()=>{
      this.showSpinner=false;
    },5000);
  }
  log(state:any):void{
    console.log(state);
  }
}
