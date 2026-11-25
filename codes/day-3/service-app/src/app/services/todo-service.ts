import { Injectable, Service } from "@angular/core";
import { todoData } from "../data/tododata";
import { Todo } from "../models/todo";

export interface ServiceContract<T> {
    getAll(): T[];
}
//@Injectable({ providedIn: 'root' }) or @Service() 
// {provide: TodoService, useClass: TodoService} and registered the same at the root level
export class TodoService implements ServiceContract<Todo> {
    getAll() {
        return todoData;
    }
}