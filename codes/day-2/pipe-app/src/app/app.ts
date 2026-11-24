import { CurrencyPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FilterTodosPipe } from './pipes/filter-todos-pipe';

export type Todo = {
  title: string,
  id: number,
  userId: number,
  completed: boolean
}

const todoData: Todo[] = [
  {
    "userId": 1,
    "id": 1,
    "title": "learn angular",
    "completed": false
  },
  {
    "userId": 2,
    "id": 2,
    "title": "learn dot net core",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "learn RESTful APIs",
    "completed": true
  },
  {
    "userId": 2,
    "id": 4,
    "title": "learn C#",
    "completed": true
  }
]

@Component({
  selector: 'app-root',
  imports: [UpperCasePipe, FilterTodosPipe, CurrencyPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  todos = signal(todoData)
}
