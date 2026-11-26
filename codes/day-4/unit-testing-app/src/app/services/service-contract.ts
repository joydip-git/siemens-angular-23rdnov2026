import { Observable } from "rxjs";

export interface ServiceContract<T> {
    getAll(): Observable<T[]>
    get(id: number): Observable<T | null>;
    add(data: T): Observable<T>;
    update(id: number, data: T): Observable<T>;
    delete(id: number): Observable<T>;
}