import { createAction, createActionGroup } from "@ngrx/store";

export const intiGroceries = createAction('[Grocery] Load Groceries');
export const completeGroceries = createAction('[Grocery] Complete Groceries');

createActionGroup({
    
})