import { createReducer, INITIAL_STATE, on } from "@ngrx/store";
import { Grocery } from "../../../models/grocery.model";
import { groceryActionGroup } from "../action/grocery.action";



const initalState:Grocery[]=[];

export const groceryReducer = createReducer(initalState,
    on(groceryActionGroup.loadGrocerySuccess,(state,action:any)=>{
       return [...state,...action.payload]
    })
);