"use strict";
var Utility;
(function (Utility) {
    let Taxes;
    (function (Taxes) {
        function calculateIva(price) {
            return (price * 0.21) + price;
        }
        Taxes.calculateIva = calculateIva;
        function calculatePenaltyIva(price) {
            return (price * 0.30) + price;
        }
        Taxes.calculatePenaltyIva = calculatePenaltyIva;
    })(Taxes = Utility.Taxes || (Utility.Taxes = {}));
})(Utility || (Utility = {}));
class Person {
    constructor(id, name) {
        this.id = id;
        this.id = id;
        this.name = name;
    }
    greet() {
        console.log(`Hello ${this.name}`);
    }
}
;
class Employee extends Person {
    constructor(id, name, dept) {
        super(id, name);
        this.dept = dept;
        this.showInfo();
    }
    //Metodos
    showInfo() {
        console.log(this.name + " - " + this.dept);
    }
}
;
const emp = new Employee(1, "Alejandro", "software");
emp.greet();
var Roles;
(function (Roles) {
    Roles[Roles["User"] = 1] = "User";
    Roles[Roles["Admin"] = 2] = "Admin";
    Roles[Roles["SuperAdmin"] = 3] = "SuperAdmin";
})(Roles || (Roles = {}));
;
console.log(Roles.Admin);
//Object
const roles = {
    User: 0,
    Admin: 1,
    SuperAdmin: 2
};
console.log(roles.Admin);
/*function greet(name: string):void{
    console.log(`hello ${name.toUpperCase()}`);
}

greet("Alejandro");

/*
function getNumber():number{
    return Math.floor((Math.random()*100)+1);
}

console.log(getNumber());
*/
function printPosition(position) {
    console.log(position.x + " " + position.y);
}
printPosition({ x: 10, y: 20 });
/// <reference path="./Utility.ts"/>
Utility.Taxes.calculatePenaltyIva(100);
let myTypeString = "Hello World";
let myTypeNumber = 42;
let myTypeBoolean = true;
//Array
let arrNumber = [1, 2, 3, 4, 5];
//let arrNumber2: Array<number> = [1, 2, 3, 4, 5];
let arrString = ["Hello", "World"];
let arrAny = [1, 2, "Hello", true];
//tuple
let tupleNumber = [1, 2, 3];
let tupleString = ["Hello", "World", "It's me!"];
let tupleAny = [1, 2, "Hello"];
//tuple array
let players;
players = [
    [1, 'Lebron'],
    [2, 'Michael Jordan'],
    [3, 'Jim smith'],
];
//Varios tipos
let myVar;
/*
//Interfaces

interface Person{
    id:number,
    name:string
}

interface Employee extends Person{
    dept:string
}

interface Customer extends Person{
    country:string
}

//const emp:Customer = {}
interface Animal{
    name:string,
    getDogs: ()=>void;
    getCats: ()=>void;
}

class Zoo implements Animal{
    name="Muuuh";
    getDogs():void{
        console.log("Dogs");
    }
    getCats():void{
        console.log("Cats");
    }
}
*/ 
const book = {
    id: 1,
    title: "The Hobbit",
    author: "My title",
    coAuthor: "Alejandro",
    isLoan: (id) => {
        console.log(`Loaned ${id}`);
    }
};
const books = [];
function getBook() {
    return { id: 1, title: "The Hobbit", author: "Tolkien", coAuthor: "Alejandro", isLoan: (id) => { console.log(`Loaned ${id}`); } };
}
const myBook = getBook();
myBook.title;
function createBook(book) {
    return book;
}
const newBook = { id: 1, title: "The Hobbit", author: "Tolkien", coAuthor: "Alejandro" };
//Type assetion
let channel = "lePep";
//let channelStr: <string> channel;
let channelStr = channel;
//const myCanvas = document.getElementById("main") as HTMLCanvasElement;
const myCanvas = document.getElementById("main");
