class Person{
    name!:string;
    protected city!:string;
    private country!:string;
    public zona!:string;

    constructor(private readonly id:number, name:string){
        this.id = id;
        this.name = name;
    }

    greet(){
        console.log(`Hello ${this.name}`);
    }
};

class Employee extends Person{
    //Atributos
    dept!:string;
    
    constructor(id:number, name:string, dept:string){
        super(id, name);
        this.dept = dept;
        this.showInfo();
    }

    //Metodos
    showInfo():void{
        console.log(this.name+" - "+this.dept);
    }
};

const emp= new Employee(1,"Alejandro","software");
emp.greet();
