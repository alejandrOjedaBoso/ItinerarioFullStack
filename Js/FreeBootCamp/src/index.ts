/// <reference path="./Utility.ts"/>

Utility.Taxes.calculatePenaltyIva(100);

let myTypeString : string = "Hello World";
let myTypeNumber : number = 42;
let myTypeBoolean : boolean = true;

//Array
let arrNumber: number[] = [1, 2, 3, 4, 5];
//let arrNumber2: Array<number> = [1, 2, 3, 4, 5];
let arrString: string[] = ["Hello", "World"];

let arrAny: any[] = [1, 2, "Hello", true];

//tuple
let tupleNumber: [number, number, number] = [1, 2, 3];
let tupleString: [string, string, string] = ["Hello", "World", "It's me!"];

let tupleAny: [any, any, any] = [1, 2, "Hello"];

//tuple array
let players: [number,string][];

players = [
    [1, 'Lebron'],
    [2, 'Michael Jordan'],
    [3, 'Jim smith'],
];

//Varios tipos
let myVar: string|number|null;