import { createAction, props } from "@ngrx/store";
import { Bucket } from "../../../models/bucket.model";

export const addToBucket = createAction(
    '[Bucket] Add',
    props<{ payload: Bucket }>()
)

export const removeFromBucket = createAction(
    '[Bucket] Remove',
    props<{ payload: Partial<Bucket> }>()
)