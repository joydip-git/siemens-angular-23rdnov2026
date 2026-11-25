import { Observable } from "rxjs";
import { ApiResponse } from "../../shared/models/api-response";
import { Product } from "../models/product";

export interface Repository {
    getProducts(): Observable<ApiResponse<Product[]>>;
}