import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Component, Inject, inject, signal } from '@angular/core';
import { FilterTodosPipe } from './pipes/filter-todos-pipe';
import { Todo } from './models/todo';
import { ServiceContract, TodoService } from './services/todo-service';
import { API_PATH_TOKEN, provideTodoService, SERVICE_TOKEN } from './config/constants';


@Component({
  selector: 'app-root',
  imports: [UpperCasePipe, FilterTodosPipe, CurrencyPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
  //providers: [provideTodoService()]
})
export class App {
  //private todoSvc: TodoService;

  todos = signal<Todo[]>([])
  private todoSvc  = inject<ServiceContract<Todo>>(SERVICE_TOKEN)
  //private api_url = ''
  private api_url = inject(API_PATH_TOKEN)
  //private todoSvc: ServiceContract = inject(TodoService)

  // constructor(todoSvc: TodoService) {
  // constructor(@Inject(API_PATH_TOKEN) path: string) {
  constructor() {
    //this.api_url = path
    //console.log(this.api_url);
    //this.todoSvc = todoSvc
    this.todos.set(this.todoSvc.getAll())
  }
}
