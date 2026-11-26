import { TestBed } from "@angular/core/testing"
import { ProductService } from "./product-service"
import { HttpTestingController, provideHttpClientTesting } from "@angular/common/http/testing"
import { Repository } from "./repository"
import { Product } from "../models/product"
import { PRODUCT_API_URL } from "../../../config/constants"

describe(
    'Product Service Test',
    () => {

        let productSvc: Repository;
        let mockHttp: HttpTestingController;

        const mockProducts: Product[] = [
            {
                "productId": 1,
                "productName": "Leaf Rake",
                "productCode": "GDN-0011",
                "releaseDate": "March 19, 2016",
                "description": "Leaf rake with 48-inch wooden handle.",
                "price": 19.95,
                "starRating": 4,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
            },
            {
                "productId": 2,
                "price": 500,
                "productName": "Garden Cart",
                "description": "15 gallon capacity rolling garden cart",
                "productCode": "GDN-0023",
                "releaseDate": "March 18, 2019",
                "starRating": 4,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
            },
            {
                "productId": 3,
                "productName": "Hammer",
                "productCode": "TBX-0048",
                "releaseDate": "May 21, 2016",
                "description": "Curved claw steel hammer",
                "price": 8.9,
                "starRating": 2,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
            },
            {
                "productId": 4,
                "productName": "Saw",
                "productCode": "TBX-0022",
                "releaseDate": "May 15, 2016",
                "description": "15-inch steel blade hand saw",
                "price": 11.55,
                "starRating": 3.7,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
            },
            {
                "productId": 5,
                "productName": "Video Game Controller",
                "productCode": "GMG-0042",
                "releaseDate": "October 15, 2015",
                "description": "Standard two-button video game controller",
                "price": 35.95,
                "starRating": 4,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
            }
        ]

        beforeEach(
            () => {
                TestBed.configureTestingModule({
                    providers: [
                        ProductService,
                        provideHttpClientTesting()
                    ]
                })

                productSvc = TestBed.inject(ProductService)
                mockHttp = TestBed.inject(HttpTestingController)
            }
        )


        afterEach(
            () => {
                mockHttp.verify()
            }
        )
        it('calling getProducts method returns 5 product objects',
            () => {
                productSvc
                    .getProducts()
                    .subscribe(
                        (apiResponse) => {
                            // if (apiResponse.data !== null)
                            expect(apiResponse.data?.length)
                                .toEqual(5)
                        }
                    )
                const fakeRequest = mockHttp.expectOne(PRODUCT_API_URL)
                expect(fakeRequest.request.method).toBe('GET')
                fakeRequest.flush({ message: 'products found', data: mockProducts })
            }
        )

    }
)