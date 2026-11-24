"use strict";
var x = 10;
//x = "joy";
console.log(x, typeof x);
function add(a, b) {
    return a + b;
}
class person {
    constructor(idValue, nameValue, salaryValue) {
        this.id = idValue;
        this.name = nameValue;
        this.salary = salaryValue;
    }
    get Id() {
        return this.id;
    }
    set Id(idValue) {
        this.id = idValue;
    }
    get Name() {
        return this.name;
    }
    set Name(nameValue) {
        this.name = nameValue;
    }
    get Salary() {
        return this.salary;
    }
    set Salary(salaryValue) {
        this.salary = salaryValue;
    }
    print() {
        return this.name + " " + this.salary + " " + this.id;
    }
}
class Trainer extends person {
    constructor(idValue, nameValue, salaryValue, subject) {
        super(idValue, nameValue, salaryValue);
        this.subject = subject;
    }
    print() {
        return super.print() + " " + this.subject;
    }
}
class Impl {
    add(a, b) {
        return a + b;
    }
}
