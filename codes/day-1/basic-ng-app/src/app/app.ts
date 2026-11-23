import { Component } from "@angular/core";
import { Another } from "./another/another";

@Component({
  templateUrl: './app.html',
  styleUrl: './app.css',
  selector: 'app-root',
  imports: [Another],
})
export class App {
  constructor() {
    console.log("App component created")
  }
  title = "Welcome to Angular"
}