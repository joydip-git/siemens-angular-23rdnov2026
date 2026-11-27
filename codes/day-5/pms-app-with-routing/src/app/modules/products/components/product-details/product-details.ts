import { Component, effect, inject, signal } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Params } from '@angular/router';
import { PRODUCT_SERVICE_TOKEN } from '../../../../config/constants';
import { Product } from '../../models/product';

@Component({
  imports: [],
  selector: 'app-product-details',
  styleUrl: './product-details.css',
  templateUrl: './product-details.html',
})
export class ProductDetails {
  private currentRoute = inject(ActivatedRoute)
  private productSvc = inject(PRODUCT_SERVICE_TOKEN)

  product = signal<Product | undefined>(undefined);
  isRequestOver = signal(false)
  errorInfo = signal('')

  constructor() {

    effect(
      () => {
        const id = this.fetchId()
      }
    )
  }

  private fetchId() {
    const snapshot: ActivatedRouteSnapshot = this.currentRoute.snapshot
    const params: Params = snapshot.params
    const id = Number(params['id'])
    return id
  }
}
