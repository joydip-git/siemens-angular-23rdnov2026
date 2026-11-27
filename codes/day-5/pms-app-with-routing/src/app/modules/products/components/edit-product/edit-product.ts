import { Component, effect, inject, signal } from '@angular/core';
import { Product } from '../../models/product';
import { ProductStorageService } from '../../services/product-storage-service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-edit-product',
  styleUrl: './edit-product.css',
  templateUrl: './edit-product.html',
})
export class EditProduct {
  product = signal<Product | undefined>(undefined)
  errorInfo = signal('')

  private storageSvc = inject(ProductStorageService)
  private formBuilder = inject(FormBuilder)

  // productName = new FormControl('enter product Name',Validators.required)
  // price = new FormControl(0,[Validators.required, Validators.max(100)])

  // form = new FormGroup({
  //   productName: new FormControl('enter product Name',Validators.required),
  //   price: new FormControl(0,[Validators.required, Validators.max(100)])
  // })


  form?: FormGroup;

  constructor() {
    effect(
      () => {
        const p = this.storageSvc.store()
        if (p) {
          this.product.set(p)
          this.errorInfo.set('')
          this.form = this.formBuilder.group(
            {
              productName: [this.product()?.productName, Validators.required],
              price: [this.product()?.price, [Validators.required, Validators.max(100)]]
            }
          );
        } else {
          this.product.set(undefined)
          this.errorInfo.set('no product found....')
        }
      }
    )
  }

  get productName() {
    return this.form?.controls['productName'];
  }
  get price() {
    return this.form?.controls['price'];
  }
  submit() {
    console.log(this.form?.value)
  }
}
