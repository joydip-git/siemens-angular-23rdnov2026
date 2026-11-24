var x: number = 10;
//x = "joy";
console.log(x, typeof x);

function add(a: number, b: number): number {
    var res;
    function operation() {
        res = a + b
    }
    return res
}

class person {
    private id: number;
    private name: string;
    private salary: number;

    constructor(idValue: number, nameValue: string, salaryValue: number) {
        this.id = idValue;
        this.name = nameValue;
        this.salary = salaryValue;
    }

    get Id(): number {
        return this.id;
    }
    set Id(idValue: number) {
        this.id = idValue;
    }
    get Name(): string {
        return this.name;
    }
    set Name(nameValue: string) {
        this.name = nameValue;
    }
    get Salary(): number {
        return this.salary;
    }
    set Salary(salaryValue: number) {
        this.salary = salaryValue;
    }
    print() {
        return this.name + " " + this.salary + " " + this.id;
    }
}

class Trainer extends person {
    subject: string;

    constructor(idValue: number, nameValue: string, salaryValue: number, subject: string) {
        super(idValue, nameValue, salaryValue);
        this.subject = subject;
    }
    print() {
        return super.print() + " " + this.subject;
    }
}

interface Ops<T> {
    add(a: T, b: T): T;
}
class Impl implements Ops<number> {
    add(a: number, b: number): number {
        return a + b;
    }
}

interface Person {
    id: number;
    name: string;
    salary: number;
}

interface Employee extends Person {
    department: string;
}

type Product = {
    id: number;
    name: string;
    price: number;
    print?: () => string;
}
const p: Product = {
    id: 1,
    name: '',
    price: 100,
    // print: () => {
    //     return 'hello'
    // }
}
type Laptop = Product & {
    ram: string;
    processor: string;
}

type MyType = boolean | string | number;

type FnType = (a: number, b: number) => MyType;