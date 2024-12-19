import { ApplicationConfig, provideZoneChangeDetection, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools' 
import { groceryReducer } from './store/reducers/grocery.reducer';
import { bucketReducer } from './store/reducers/bucket.reducer';
 
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({
      groceries: groceryReducer,
      myBucket: bucketReducer
    }),
    provideEffects(),
    provideStoreDevtools({})
 
  ]
};
