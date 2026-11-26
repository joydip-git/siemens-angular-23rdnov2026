import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';
import { DebugElement, resource } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CalculatorService } from './services/calculator-service';
import { provideCalculatorService } from "./config/constants";

describe(
  'App component testing',
  () => {

    let fixture: ComponentFixture<App> | null;
    let componentInstance: App | null;

    beforeEach(
      () => {
        TestBed.configureTestingModule({
          //providers: [CalculatorService]
          providers:[provideCalculatorService()]
        })
        fixture = TestBed.createComponent(App)
        componentInstance = fixture.componentInstance;
        //fixture.detectChanges()
      }
    )

    afterEach(
      () => {
        fixture = null
        componentInstance = null
      }
    )
    //test methods
    it(
      'App component instance creatd',
      () => {
        expect(componentInstance).toBeDefined()
      }
    )

    it('Value of the title property is -> welcome to unit testing',
      () => {
        expect(componentInstance?.title()).toBe('welcome to unit testing')
      }
    )

    it(
      'H2 element in the template displaying title property value properly -> welcome to unit testing',
      async () => {
        //const debugElement: DebugElement = fixture.debugElement
        //fixture.debugElement.query(By.css('#main'))
        //fixture.detectChanges()
        await fixture?.whenStable()
        const nativeElement = fixture?.nativeElement as HTMLElement
        const h2Element = nativeElement.querySelector('#main')
        expect(h2Element?.textContent).toBe('welcome to unit testing')
      }
    )

    it(
      'upon calling calculate method, result will be 5 when first and second are 3 and 2',
      () => {
        componentInstance?.first.set(3)
        componentInstance?.second.set(2)
        componentInstance?.calculate()
        expect(componentInstance?.result()).toEqual(5)
      }
    )

  }
)