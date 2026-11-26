import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';
import { provideCalculatorService, providePostService } from "./config/constants";
import { PostList } from './post-list/post-list';

describe(
  'App component testing',
  () => {

    let fixture: ComponentFixture<App> | null;
    let componentInstance: App | null;

    beforeEach(
      async () => {
      await TestBed.configureTestingModule({
        //providers: [CalculatorService]
        providers: [
          provideCalculatorService(),
          providePostService()
        ],
        imports: [PostList]
      }).compileComponents()
        
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

    it('upon entering 3 and 2 in the first and second text box and then clicking the Caluclate button the result text box should display 5',
      () => {

        const template = fixture?.nativeElement as HTMLElement
        const firstTxt = template.querySelector('#txtFirst') as HTMLInputElement
        firstTxt.value = "3"
        //firstTxt.dispatchEvent('input')
        firstTxt.dispatchEvent(new InputEvent('input'))

        // expect(componentInstance?.first()).toEqual(3)

        const secondTxt = template.querySelector('#txtSecond') as HTMLInputElement
        secondTxt.value = "2"
        secondTxt.dispatchEvent(new InputEvent('input'))
        //expect(componentInstance?.second()).toEqual(2)

        const button = template.querySelector('#btnCalculate') as HTMLButtonElement
        button.click()
        fixture?.detectChanges()

        //expect(componentInstance?.result()).toEqual(5)

        const resultTxt = template.querySelector('#txtResult') as HTMLInputElement
        //expect(resultTxt).toBeDefined()
        expect(resultTxt.value).toBe("5")
      }
    )

  }
)