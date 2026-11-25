import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Component, Inject, inject, signal } from '@angular/core';
import { PostList } from './post-list/post-list';



@Component({
  selector: 'app-root',
  imports: [PostList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  show = signal(false)
}
