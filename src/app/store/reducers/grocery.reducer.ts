import { createReducer } from "@ngrx/store"
import { Grocery } from "../../../models/grocery.model"

const intialState: Grocery[] = [
    // {id: 17, name:"apple", type: "fruit" },
    // {id: 18, name:"Banana", type: "fruit" },
    // {id: 19, name: "lays chips", type: "snacks" },
    // {id: 20, name: "duritos", type: "snacks" }
]

export const groceryReducer = createReducer(intialState)