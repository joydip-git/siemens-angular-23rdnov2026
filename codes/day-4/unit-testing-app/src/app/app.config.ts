import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { CalculatorService } from './services/calculator-service';
import { provideCalculatorService, providePostService } from './config/constants';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    //CalculatorService //{provide: CalculatorService, useClass: CalculatorService},
    provideCalculatorService(),
    providePostService()
  ]
};
