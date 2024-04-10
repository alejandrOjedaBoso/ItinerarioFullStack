import { Machine } from '../../maquinas/interfaces/machine.interface.js';
export interface Sensor{
    code:number,
    name:string,
    model:string,
    type:string,
    startDate:Date,
    endDate:Date,
    degistered:boolean,
    machineId: string;
}