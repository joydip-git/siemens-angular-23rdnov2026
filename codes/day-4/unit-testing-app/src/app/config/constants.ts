import { ClassProvider, InjectionToken, Provider } from "@angular/core";
import { CalculatorService, Contract } from "../services/calculator-service";
import { PostService } from "../services/post-service";
import { ServiceContract } from "../services/service-contract";
import { Post } from "../models/post";

export const TOKEN = new InjectionToken<Contract>('TOKEN')
export const SERVICE = CalculatorService

export const API_URL = 'https://jsonplaceholder.typicode.com/posts'

export const SERVICE_TOKEN = new InjectionToken<ServiceContract<Post>>('SERVICE_TOKEN')
export const SERVICE_CLASS = PostService

export const providePostService = (): ClassProvider => {
    return {
        provide: SERVICE_TOKEN,
        useClass: SERVICE_CLASS
    }
}

export const provideCalculatorService = (): Provider => {
    return {
        provide: TOKEN,
        useClass: SERVICE
    }
}