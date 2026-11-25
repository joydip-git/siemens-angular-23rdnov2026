import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAPIPath, provideTodoService } from './config/constants';
import { TodoService } from './services/todo-service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideTodoService(),
    //TodoService, //{provide: TodoService, useClass: TodoService}
    provideAPIPath()
  ]
};
