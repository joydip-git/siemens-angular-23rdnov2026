import { todoData } from "../data/tododata";
import { Todo } from "../models/todo";

export interface ServiceContract {
    getTodos(): Todo[];
}
export class DataService implements ServiceContract {
    getTodos() {
        return todoData;
    }
}