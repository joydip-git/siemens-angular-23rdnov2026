import { Component, output, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-filter-product',
  styleUrl: './filter-product.css',
  templateUrl: './filter-product.html',
})
export class FilterProduct {
  filterValue = signal('')
  filterValueChanged = output<string>({ alias: 'filterValueEntered' })

  emitFilterValue(value: string) {
    this.filterValue.set(value)
    this.filterValueChanged.emit(value)
  }
}
