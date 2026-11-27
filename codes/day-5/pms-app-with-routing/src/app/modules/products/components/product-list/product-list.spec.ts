import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductList } from './product-list';
import { PRODUCT_SERVICE_TOKEN } from "../../../../config/constants";
import { ProductService } from '../../services/product-service';
import { Product } from '../../models/product';
import { Observable, of } from 'rxjs';
import { ApiResponse } from '../../../shared/models/api-response';
import { Repository } from '../../services/repository';

describe('ProductList', () => {

  let prodSvc: Repository;
  let component: ProductList;
  let fixture: ComponentFixture<ProductList>;
  let fakeProdSvc: jasmine.SpyObj<ProductService>;
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

  beforeEach(async () => {
    fakeProdSvc = jasmine.createSpyObj<ProductService>('ProductService', ['getProducts'])
    const fakeResponse: Observable<ApiResponse<Product[]>> = of({
      message: 'products found',
      data: mockProducts
    })
    fakeProdSvc.getProducts.and.returnValues(fakeResponse)

    await TestBed.configureTestingModule({
      imports: [ProductList],
      providers: [
        {
          provide: PRODUCT_SERVICE_TOKEN,
          useValue: fakeProdSvc
        }
      ]
    }).compileComponents();

    prodSvc = TestBed.inject(PRODUCT_SERVICE_TOKEN)
    fixture = TestBed.createComponent(ProductList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create fake service', () => {
    expect(prodSvc).toBeTruthy();
  });

  it('should create Product List Component', () => {
    expect(component).toBeTruthy();
  });

  it('the table body in the template should display 5 tr elements with 5 product details',
    () => {
      const element = fixture.nativeElement as HTMLElement
      const tbody = element.querySelector('#proTableBody')
      expect(tbody?.children.length).toBe(5)
    }
  )
});
