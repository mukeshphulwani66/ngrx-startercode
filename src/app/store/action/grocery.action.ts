import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Grocery } from "../../../models/grocery.model";

export const groceryActionGroup = createActionGroup({
    source: 'Grocery API',
    events:{
        'Load Grocery Success':props<{payload:Grocery[]}>(),
        'Load Grocery Failure':emptyProps(),
        'Loady Grocery':emptyProps()
    }
});

