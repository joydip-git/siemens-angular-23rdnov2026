import { Observable } from "rxjs";
import { Post } from "../models/post";
import { ServiceContract } from "./service-contract";
import { inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_URL } from "../config/constants";

export class PostService implements ServiceContract<Post> {
    private http = inject(HttpClient)

    getAll(): Observable<Post[]> {
        return this.http.get<Post[]>(API_URL)
    }
    get(id: number): Observable<Post | null> {
        return this.http.get<Post>(`${API_URL}/${id}`)
    }
    add(data: Post): Observable<Post> {
        return this.http.post<Post>(API_URL, data)
    }
    update(id: number, data: Post): Observable<Post> {
        return this.http.put<Post>(`${API_URL}/${id}`, data)
    }
    delete(id: number): Observable<Post> {
        return this.http.delete<Post>(`${API_URL}/${id}`)
    }

}