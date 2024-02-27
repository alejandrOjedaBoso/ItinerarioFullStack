import { Component, OnInit,ViewChild, AfterViewInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { Observable } from 'rxjs';
import { map,startWith } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'MaterialDemo';
  notification:number=0;
  showSpinner:boolean=false;
  opened:boolean=false;
  selectedValue?:string;
  options:string[] = ['Angular', 'React', 'Vue'];
  myControl = new FormControl();
  filteredOptions?: Observable<string[]>;
  minDate:Date = new Date();
  maxDate:Date = new Date(2024,1,35);
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  numbers:number[] =[];

  
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private snackBar: MatSnackBar, public dialog: MatDialog) {
    for (let i = 0; i < 1000; i++) {
      this.numbers.push(i);
    }
  }
  
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  loadData(){
    this.showSpinner=true;
    setTimeout(()=>{
      this.showSpinner=false;
    },5000);
  }
  log(state:any):void{
    console.log(state);
  }

  logChange(index:any):void{
    this.log(index);
  }

  displayFunction(subject:any):any{
    return subject?subject.name : undefined;
  }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  dateFilter=(date:any)=>{
    date= date===null?new Date(): date;
    const day= date.getDay();
    return day!== 0 && day!== 6;
  }
  
  openSnackBar(message: string,action:string) {
  let snackBarRef = this.snackBar.open(message,action, {duration:2000});

  snackBarRef.afterDismissed().subscribe(()=>{
    console.log('The snackbar has been dismissed');
  });

  snackBarRef.onAction().subscribe(() =>{
    console.log('The snackbar has been Triggered');
  });
  }
  
  openDialog(): void {
    let dialogRef=this.dialog.open(DialogExampleComponent,{ data: {name:"Alejandro"}});

    dialogRef.afterClosed().subscribe(result=>{
      console.log('Dialog result: ', result);
    });
  }

  applyFilter(filterValue: any): void {
    filterValue=filterValue.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
