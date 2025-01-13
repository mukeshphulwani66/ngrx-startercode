import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Grocery } from "../../../models/grocery.model";

export const grocerySelector = createFeatureSelector<Grocery[]>("grocery");

export const SelectGroceryByType = (type:string) =>createSelector(grocerySelector,(state)=>{
   if(type){
    return state.filter(x=>x.type==type);
   }
   else{
    return state;
   }
})