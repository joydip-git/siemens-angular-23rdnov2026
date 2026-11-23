import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-another',
  styleUrl: './another.css',
  templateUrl: './another.html',
})
export class Another {
  //title = "Welcome to Angular"

  title: WritableSignal<string> = signal("Welcome to Angular")
  width = 400
  constructor() {
    console.log("App component created")
  }

  // changeTitle(newTitle: InputEvent) {
  //   const element = newTitle.target as HTMLInputElement
  //   console.log(newTitle.data);
  //   console.log(element.value)
  // }

  // changeTitle(newTitle: string) {
  //   this.title = newTitle
  // }

  // changeTitle(newTitle: string) {
  //   this.title.set(newTitle)
  // }
}
