import { createReducer, on } from "@ngrx/store";
import { Bucket } from "../../../models/bucket.model";
import { addToBucket, removeFromBucket } from "../actions/bucket.action";

const intialState: Bucket[] = []

export const bucketReducer = createReducer(
    intialState,
    on(addToBucket, (state, action) => {
        const tempState = state.find(x => x.id === action.payload.id);
        if (tempState) {
            return state.map(item => {
                return item.id === tempState.id ? { ...item, quantity: item.quantity + action.payload.quantity } : item;
            })
        }
        return [...state, action.payload];
    }),  
    on(removeFromBucket, (state, action) => {
        const tempState = state.find(x => x.id === action.payload.id);
        debugger
        if (tempState && tempState.quantity > 1 ) {
            return state.map(item => {
                return item.id === tempState.id ? { ...item, quantity: item.quantity - 1 } : item;
            })
        }
        else{
            return state.filter(item => item.id !== action.payload.id)
        }
        
    }));