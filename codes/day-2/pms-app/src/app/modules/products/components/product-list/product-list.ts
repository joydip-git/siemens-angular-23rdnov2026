import { Component, computed, input, signal } from '@angular/core';
import { productRecords } from '../../repository/productrecords';

@Component({
  imports: [],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {
  filterText = input('')
  protected products = signal(productRecords)
  // protected filteredProducts = computed(
  //   () => {
  //     if (this.filterText() !== '') {
  //       return this.products().filter(
  //         (p) => p.productName
  //           .toLowerCase()
  //           .includes(this.filterText().toLowerCase())
  //       )
  //     } else
  //       return this.products()
  //   }
  // )

}
