import { Component, effect, EffectCleanupRegisterFn, inject, input, signal } from '@angular/core';
import { PRODUCT_SERVICE_TOKEN } from '../../../../config/constants';
import { ApiResponse } from '../../../shared/models/api-response';
import { Product } from '../../models/product';
import { ProductFilterPipe } from '../../pipes/product-filter-pipe';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';

@Component({
  imports: [ProductFilterPipe, UpperCasePipe, CurrencyPipe],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {
  public filterText = input('')

  protected products = signal<Product[]>([])
  protected isRequestOver = signal(false)
  protected errorMessage = signal('')

  private productSvc = inject(PRODUCT_SERVICE_TOKEN)

  constructor() {

    effect(
      (cleanUpFn: EffectCleanupRegisterFn) => {
        this.fetchProducts(cleanUpFn)
      }
    )
  }

  private fetchProducts(cleanUpFn: EffectCleanupRegisterFn) {
    const fetchSubscription = this.productSvc.getProducts().subscribe({
      next: (response: ApiResponse<Product[]>) => {

        if (response.data !== null) {
          this.products.set(response.data)
          this.errorMessage.set('')
          this.isRequestOver.set(true)
        } else {
          this.products.set([])
          this.errorMessage.set(response.message)
          this.isRequestOver.set(true)
        }
      },
      error: (err) => {
        this.products.set([])
        this.errorMessage.set(err.message)
        this.isRequestOver.set(true)
      }
    })

    cleanUpFn(
      () => fetchSubscription.unsubscribe()
    )
  }
}
