import { Service } from "@angular/core";

export interface Contract {
    add(a: number, b: number): number;
}
//@Service()
export class CalculatorService implements Contract {
    add(a: number, b: number): number {
        return a + b
    }
}