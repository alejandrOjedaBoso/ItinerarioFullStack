import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import {Sensor} from "../interfaces/sensor.interface.js";
import {BACKEND} from "../../../../config/Config.js";


@Injectable({
    providedIn: 'root'
  })
export class SensorService {
    private path: string = BACKEND+"/sensors";

    constructor(private http: HttpClient) { }

    getSensorUserUnansigned():Observable<Sensor[]>{
        const token = localStorage.getItem('token');
        const httpOptions ={
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        }
        return this.http.get<Sensor[]>(this.path+"/noasignedanduser", httpOptions);
    }

}