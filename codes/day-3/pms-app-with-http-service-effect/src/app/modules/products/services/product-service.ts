import { Observable } from "rxjs";
import { ApiResponse } from "../../shared/models/api-response";
import { Product } from "../models/product";
import { Repository } from "./repository";
import { inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PRODUCT_API_URL } from "../../../config/constants";

export class ProductService implements Repository {
    private http = inject(HttpClient)

    getProducts(): Observable<ApiResponse<Product[]>> {
        return this.http.get<ApiResponse<Product[]>>(PRODUCT_API_URL)
    }
}