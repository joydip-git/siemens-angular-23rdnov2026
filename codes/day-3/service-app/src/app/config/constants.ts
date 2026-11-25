import { ClassProvider, InjectionToken, Provider, ValueProvider } from "@angular/core";
import { ServiceContract, TodoService } from "../services/todo-service";
import { Todo } from "../models/todo";

//export const SERVICE_TOKEN = TodoService
export const SERVICE_TOKEN = new InjectionToken<ServiceContract<Todo>>('SERVICE_TOKEN')
export const SERVICE_TYPE = TodoService

// export const API_PATH_TOKEN = 'API_PATH_TOKEN'
export const API_PATH_TOKEN = new InjectionToken<string>('API_PATH_TOKEN')
export const API_PATH_VALUE = 'http://localhost:3000/products'

export const provideTodoService = (): ClassProvider => {
    return {
        provide: SERVICE_TOKEN,
        useClass: SERVICE_TYPE
    }
}

export const provideAPIPath = (): ValueProvider => {
    return {
        provide: API_PATH_TOKEN,
        useValue: API_PATH_VALUE
    }
}