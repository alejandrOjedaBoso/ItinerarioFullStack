import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import {Machine} from "../interfaces/machine.interface.js";
import {BACKEND} from "../../../../config/Config.js";


@Injectable({
    providedIn: 'root'
  })
export class MachineService {
    private path: string = BACKEND+"/machines";

    constructor(private http: HttpClient) { }

    getMachinesByToken(): Observable<Machine[]>{
        const token = localStorage.getItem('token');
        const httpOptions ={
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        }
        return this.http.get<Machine[]>(this.path+"/token",httpOptions);
    }

    deleteMachine(machine: Machine): Observable<any>{  
        const token = localStorage.getItem('token');
        const httpOptions ={
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        }
       return this.http.delete(this.path+"/"+machine.ref, httpOptions);
    }

    updateMachine(machine: Machine): Observable<Machine>{  
        const token = localStorage.getItem('token');
        const httpOptions ={
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        }
       return this.http.put<Machine>(this.path+"/"+machine.ref,machine,httpOptions);
    }
}