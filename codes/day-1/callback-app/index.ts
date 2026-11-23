//function declaration
function add(a: number, b: number): number {
    return a + b;
}

//function expression
//a. arrow function expression
const subtract = (a: number, b: number): number => a - b

//b. anonymous function expression
const multiply = function (a: number, b: number): number {
    return a * b;
}

//var, let and const
type FnType = (x: number, y: number) => number;
//delegate int somedel(int x, int y)
function invoke(fnRef: FnType, a: number, b: number): void {
    const res = fnRef(a, b)
    console.log(res)
}

invoke(add, 12, 13)
//invoke((a:number, b:number, c:number)=>a+b+c,12,14)

const numbers: number[] = [1, 2, 3, 4, 5]


interface Ops {
    add(a: number, b: number): number;
}

class Calculator implements Ops {
    add(a: number, b: number): number {
        return a + b;
    }
}