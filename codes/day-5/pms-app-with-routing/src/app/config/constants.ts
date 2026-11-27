import { ClassProvider, InjectionToken } from "@angular/core"
import { Repository } from "../modules/products/services/repository"
import { ProductService } from "../modules/products/services/product-service"

export const PRODUCT_API_URL = 'http://localhost:3000/products'

export const PRODUCT_SERVICE_TOKEN = new InjectionToken<Repository>('PRODUCT_SERVICE_TOKEN')
export const PRODUCT_SERVICE_CLASS = ProductService

export const provideProductService = (): ClassProvider => {
    return {
        provide: PRODUCT_SERVICE_TOKEN,
        useClass: PRODUCT_SERVICE_CLASS
    }
}