//import { NgFor, NgIf } from '@angular/common';
import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { Person } from './models/person';

@Component({
  selector: 'app-root',
  //imports: [NgFor, NgIf],
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  count = 0
  show = signal(false)
  people = signal(personData)
  value: WritableSignal<number> = signal(0)
  doubleValue: Signal<number> = computed(() => { return this.value() * 2 });
  valueMessage = 'NA'

  constructor() {
    effect(
      () => {
        this.valueMessage = `Value in the Value signal is ${this.value()}`
      }
    )
  }

  increase() {
    this.value.update(reset)
    this.count++
  }
}

const personData: Person[] = [
  {
    name: 'John',
    age: 30
  },
  {
    name: 'Jane',
    age: 25
  }
]
function reset(current: number): number {
  return current + 1
}
