"use strict";
// Forma 1
/*
interface PersonGeneric{
    id:number,
    name:string
}

interface Product{
    id:number,
    name:string,
    price:number
}

type dataType = PersonGeneric | Product;

class DataColletion{
    private items:dataType[]=[];

    addItem(item:dataType):void{
        this.items.push(item);
    }

    getItems():void{
        console.log(JSON.stringify(this.items));
    }

    getNames():string[]{
        return this.items.map(item=>item.name);
    }

    getItemById(id:number):dataType|undefined{
        return this.items.find((item:dataType )=>item.id===id);
    }
}

const dataColletion = new DataColletion();

dataColletion.addItem({
    id:1,
    name:"Alejandro"
});

dataColletion.addItem({
    id:2,
    name:"Cocacola",
    price:10.2
});

dataColletion.getItems();
console.log(dataColletion.getItemById(2));
*/
class DataColletion {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    getItems() {
        console.log(JSON.stringify(this.items));
    }
    getNames() {
        return this.items.map(item => item.name);
    }
    getItemById(id) {
        return this.items.find((item) => item.id === id);
    }
}
const dataColletion = new DataColletion();
dataColletion.addItem({
    id: 1,
    name: "Pepe",
    price: 2
});
dataColletion.addItem({
    id: 2,
    name: "Cocacola",
    price: 10.2
});
dataColletion.getItems();
console.log(dataColletion.getItemById(2));
