import { Pipe, PipeTransform } from "@angular/core";
import { Todo } from "../models/todo";

@Pipe({
    name: 'filtertodos'
})
export class FilterTodosPipe implements PipeTransform {
    transform(value: Todo[], ...args: string[]): Todo[] {
        if (args[0] !== '') {
            return value.filter(
                todo => todo.title.toLowerCase().includes(args[0].toLowerCase())
            )
        } else
            return value
    }
}