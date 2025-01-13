import { createReducer, on } from "@ngrx/store";
import { Bucket } from "../../../models/bucket.model";
import { decrementAction, incrementAction } from "../action/bucket.action";

const initalState:Bucket[]=[];

export const bucketReducer = createReducer(
    initalState,
    on(incrementAction, (state,action:any)=>{
       let existingItem = state.find(x=>x.id==action.payload.id)
      if(existingItem) {
        const updatedItem = {
            ...existingItem,
            quantity: existingItem.quantity + action.payload.quantity,
          };
          return state.map(item=>item.id==updatedItem.id ?  updatedItem  :item)
        }
      else{
        return [...state,action.payload]
      }
    }),
    on(decrementAction,(state,action:any)=>{
        let existingItem = state.find(x=>x.id==action.payload.id)
        if(existingItem) {
            if(existingItem.quantity > 1){
           const updatedItem={
             ...existingItem,
             quantity: existingItem.quantity - 1
           }
           
           return state.map(item=>item.id==existingItem.id ? updatedItem : item);
        }
        else
        {

           return state.filter(x=>x.id != action.payload.id);
        }
        }
        
        return[...state]

    })
);