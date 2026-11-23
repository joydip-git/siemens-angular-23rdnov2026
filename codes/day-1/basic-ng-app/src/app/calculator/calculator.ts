import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-calculator',
  styleUrl: './calculator.css',
  templateUrl: './calculator.html',
})
export class Calculator {
  protected choice = signal(0)
  protected first = signal(0)
  protected second = signal(0)
  protected result = signal(0)

  protected calculateResult() {
    switch (this.choice()) {
      case 1:
        this.result.set(this.first() + this.second())
        break;
      case 2:
        this.result.set(this.first() - this.second())
        break;
      case 3:
        this.result.set(this.first() * this.second())
        break;
      case 4:
        if (this.second() === 0) {
          alert("Division by zero is not allowed")
          this.result.set(0)
        } else {
          this.result.set(this.first() / this.second())
        }
        break;
      default:
        alert("Invalid choice")
    }
  }
}
