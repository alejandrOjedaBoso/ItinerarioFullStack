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

//Forma 2
interface PersonGeneric{
    id:number,
    name:string
}

interface Product{
    id:number,
    name:string,
    price:number
}

interface EmployeeGeneric extends PersonGeneric{
    role:string
}

interface Data<T>{
    addItem(item:T):void;
}

class DataColletion<T extends {id:number,name:string}> implements Data<T>{
    private items:T[]=[];

    addItem(item:T):void{
        this.items.push(item);
    }

    getItems():void{
        console.log(JSON.stringify(this.items));
    }

    getNames():string[]{
        return this.items.map(item=>item.name);
    }

    getItemById(id:number):T|undefined{
        return this.items.find((item:T )=>item.id===id);
    }
}

const dataColletion = new DataColletion<Product>();

dataColletion.addItem({
    id:1,
    name:"Pepe",
    price: 2
});

dataColletion.addItem({
    id:2,
    name:"Cocacola",
    price:10.2
});

dataColletion.getItems();
console.log(dataColletion.getItemById(2));