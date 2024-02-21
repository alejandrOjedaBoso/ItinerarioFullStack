"use strict";
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
