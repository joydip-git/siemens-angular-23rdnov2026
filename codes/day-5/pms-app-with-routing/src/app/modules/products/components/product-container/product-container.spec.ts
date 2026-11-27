import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductContainer } from './product-container';
import { provideProductService } from "../../../../config/constants";
import { ProductList } from '../product-list/product-list';
import { FilterProduct } from '../filter-product/filter-product';

describe('ProductContainer', () => {
  let component: ProductContainer;
  let fixture: ComponentFixture<ProductContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductContainer, FilterProduct],
      providers: [provideProductService()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
