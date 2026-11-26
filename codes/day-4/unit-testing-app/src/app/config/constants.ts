import { InjectionToken, Provider } from "@angular/core";
import { CalculatorService, Contract } from "../services/calculator-service";

export const TOKEN = new InjectionToken<Contract>('TOKEN')
export const SERVICE = CalculatorService

export const provideCalculatorService = (): Provider => {
    return {
        provide: TOKEN,
        useClass: SERVICE
    }
}