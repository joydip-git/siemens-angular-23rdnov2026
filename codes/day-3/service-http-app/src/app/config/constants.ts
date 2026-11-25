import { ClassProvider, InjectionToken } from "@angular/core"
import { ServiceContract } from "../services/service-contract"
import { Post } from "../models/post"
import { PostService } from "../services/post-service"

export const API_URL = 'https://jsonplaceholder.typicode.com/posts'

//export const SERVICE_TOKEN = PostService
export const SERVICE_TOKEN = new InjectionToken<ServiceContract<Post>>('SERVICE_TOKEN')
export const SERVICE_CLASS = PostService

export const providePostService = (): ClassProvider => {
    return {
        provide: SERVICE_TOKEN,
        useClass: SERVICE_CLASS
    }
}