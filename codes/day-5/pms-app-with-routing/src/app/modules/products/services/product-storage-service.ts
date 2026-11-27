import { Service, signal } from '@angular/core';
import { Product } from '../models/product';

@Service()
export class ProductStorageService {
    private _store = signal<Product | undefined>(undefined)

    save(p: Product | undefined) {
        this._store.set(p)
    }

    get store() {
        return this._store
    }
}
