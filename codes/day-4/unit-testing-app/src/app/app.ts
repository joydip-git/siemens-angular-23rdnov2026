import { Component, inject, signal } from '@angular/core';
import { CalculatorService } from './services/calculator-service';
import { TOKEN } from './config/constants';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = signal('welcome to unit testing')
  //private calcSvc = inject(CalculatorService)
  private calcSvc = inject(TOKEN)
  first = signal(0)
  second = signal(0)
  result = signal(0)

  calculate() {
    this.result.set(this.calcSvc.add(this.first(), this.second()))
  }
}
