import {configureStore} from "@reduxjs/toolkit"
import searchReducer from "./features/searchSlice"
import collectionReducer from "./features/collection"
export const store = configureStore({
    reducer: {
        search:searchReducer,
        collection: collectionReducer
    }
})