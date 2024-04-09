import {User} from '../../../../interfaces/user.interface.js';
export interface Machine{
    ref:string
    name:string,
    brand:string,
    model:string,
    startDate:Date,
    endDate:Date,
    derigistered:boolean;
    heads:number,
    status:string,
    powerKv:number,
    emailAlerts:boolean,
    user:User
}