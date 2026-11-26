import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { provideProductService } from "../../../../config/constants";
import { ProductContainer } from '../../../products/components/product-container/product-container';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, ProductContainer],
      providers: [provideProductService()]

    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
