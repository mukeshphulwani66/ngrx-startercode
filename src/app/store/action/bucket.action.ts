import { createAction, props } from "@ngrx/store";
import { Grocery } from "../../../models/grocery.model";
import { Bucket } from "../../../models/bucket.model";

export const incrementAction = createAction("[BucketAdd]",props<{payload:Bucket}>() );

export const decrementAction = createAction("[BucketRemove]",props<{payload:Partial<Bucket>}>() );