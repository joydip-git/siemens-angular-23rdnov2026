import { Component, signal, WritableSignal } from "@angular/core";
import { Another } from "./another/another";

@Component({
  templateUrl: './app.html',
  styleUrl: './app.css',
  selector: 'app-root',
  imports: [Another],
})
export class App {
  //title = 
  title: WritableSignal<string> = signal("Welcome to Angular")
  width = 400
  constructor() {
    console.log("App component created")
  }

  // changeTitle(newTitle: InputEvent) {
  //   //this.title = newTitle
  //   const element = newTitle.target as HTMLInputElement
  //   //console.log(newTitle.data);
  //   //console.log(element.value)
  // }
  // changeTitle(newTitle: string) {
  //   //this.title = newTitle
  //   this.title.set(newTitle)
  // }
}