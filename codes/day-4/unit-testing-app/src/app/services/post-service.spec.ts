import { TestBed } from "@angular/core/testing";
import { Post } from "../models/post"
import { ServiceContract } from "./service-contract"
import { PostService } from "./post-service";
import { HttpTestingController, provideHttpClientTesting } from "@angular/common/http/testing";

describe(
    'Testing Post Service',
    () => {

        let postSvc: ServiceContract<Post>;
        let httpMock: HttpTestingController;

        beforeEach(
            () => {
                TestBed.configureTestingModule({
                    providers: [
                        //register provider for PostService
                        PostService,
                        //regsiter service provider for HttpTestingController service class
                        provideHttpClientTesting()
                    ]
                })
                postSvc = TestBed.inject(PostService)
                httpMock = TestBed.inject(HttpTestingController)
            }
        )

        it(
            'get method returns a single post object when id: 1 is passed',
            () => {
                const mockResponse: Post = {
                    "userId": 1,
                    "id": 1,
                    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                }

                //invoke and test the service method
                postSvc
                    .get(1)
                    .subscribe(
                        (data) => {
                            expect(data).toEqual(mockResponse)
                        }
                )
                
                //replace the actual by fake call (by mocking the call by flusing the request with mock response)
                const testRequest = httpMock.expectOne(
                    'https://jsonplaceholder.typicode.com/posts/1')
                expect(testRequest.request.method).toEqual('GET')
                testRequest.flush(mockResponse)
            }
        )
    }
)