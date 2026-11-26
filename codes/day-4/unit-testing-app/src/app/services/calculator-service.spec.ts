import { TestBed } from "@angular/core/testing";
import { CalculatorService } from "./calculator-service";


describe(
    'Testing Calculation Service',
    () => {

        let calcSvc: CalculatorService | null;

        beforeEach(
            () => {
                TestBed.configureTestingModule({
                    providers: [CalculatorService],                    
                })
                calcSvc = TestBed.inject(CalculatorService)
            }
        )

        afterEach(
            () => {
                calcSvc = null
            }
        )

        it('Calculator service instance created',
            () => {
                expect(calcSvc).toBeDefined()
            }
        )

        it(
            'add method returns 5 when 3 and 2 are the inputs',
            () => {
                expect(calcSvc?.add(3, 2)).toEqual(5)
            }
        )
    }
)