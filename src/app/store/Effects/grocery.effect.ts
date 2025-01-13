import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { GroceryService } from '../../grocery.service';
import { groceryActionGroup } from '../action/grocery.action';

@Injectable()
export class GroceryEffects {
    private actions$ = inject(Actions);
    private groceryService = inject(GroceryService);
   
    loadGrocery$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(groceryActionGroup.loadyGrocery),
            exhaustMap(() => this.groceryService.fetchAllGroceries()
              .pipe(
                map((grocery:any) => (groceryActionGroup.loadGrocerySuccess({payload:grocery}))),
                catchError(() => EMPTY)
              ))
        );
      });


 
}