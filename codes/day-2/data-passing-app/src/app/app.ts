import { Component } from '@angular/core';
import { Nested } from './nested/nested';
@Component({
  selector: 'app-root',
  imports: [Nested],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  parentValue = 100

  updateParentValue(value: number) {
    this.parentValue = value
  }
}
