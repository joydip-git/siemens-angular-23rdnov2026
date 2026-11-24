import { Component, signal } from '@angular/core';
import { productRecords } from '../../repository/productrecords';

@Component({
  imports: [],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {

  protected products = signal(productRecords)

}
