//variables
export const PI=3.14;

//interfaces
export interface Person{
    id:number;
    name:string;
}

//function
export function generateRandomNumber():number{
    return Math.floor((Math.random()*100)+1);
}
