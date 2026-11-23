import { Component } from "@angular/core";
import { Another } from "./another/another";
import { Calculator } from "./calculator/calculator";

@Component({
  templateUrl: './app.html',
  styleUrl: './app.css',
  selector: 'app-root',
  imports: [Another, Calculator],
})
export class App {

}