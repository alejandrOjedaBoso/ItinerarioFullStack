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

function printPosition(position: {x: number, y?: number}):void{
    console.log(position.x + " " + position.y);
}
printPosition({x:10, y:20});