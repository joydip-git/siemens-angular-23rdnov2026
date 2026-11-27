import { Component, effect, EffectCleanupRegisterFn, inject, signal } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Params, Router } from '@angular/router';
import { PRODUCT_SERVICE_TOKEN } from '../../../../config/constants';
import { Product } from '../../models/product';
import { ProductStorageService } from '../../services/product-storage-service';

@Component({
  imports: [],
  selector: 'app-product-details',
  styleUrl: './product-details.css',
  templateUrl: './product-details.html',
})
export class ProductDetails {
  private currentRoute = inject(ActivatedRoute)
  private productSvc = inject(PRODUCT_SERVICE_TOKEN)
  private router = inject(Router)
  private storageSvc = inject(ProductStorageService)

  product = signal<Product | undefined>(undefined);
  isRequestOver = signal(false)
  errorInfo = signal('')

  constructor() {

    effect(
      (cleanUp: EffectCleanupRegisterFn) => {
        const id = this.fetchId()
        this.fetchProductById(id, cleanUp)
      }
    )
  }

  goTo() {
    if (this.product() !== undefined) {
      this.storageSvc.save(this.product())
      this.router.navigate(['/products/edit', this.product()?.productId])
    }
  }

  private fetchId() {
    const snapshot: ActivatedRouteSnapshot = this.currentRoute.snapshot
    const params: Params = snapshot.params
    const id = Number(params['id'])
    return id
  }

  private fetchProductById(id: number, cleanUpFn: EffectCleanupRegisterFn) {

    const sub = this.productSvc.getProduct(id).subscribe({
      next: (response) => {
        if (response.data !== null) {
          this.product.set(response.data)
          this.isRequestOver.set(true)
          this.errorInfo.set('')
        } else {
          this.product.set(undefined)
          this.isRequestOver.set(true)
          this.errorInfo.set(response.message)
        }
      },
      error: (err) => {
        this.product.set(undefined)
        this.isRequestOver.set(true)
        this.errorInfo.set(err.message)
      }
    })

    cleanUpFn(
      () => sub.unsubscribe()
    )
  }
}
