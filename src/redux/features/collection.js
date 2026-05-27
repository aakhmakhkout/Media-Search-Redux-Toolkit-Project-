import { createSlice } from "@reduxjs/toolkit";

export const collectionsSlice = createSlice({
    name:"collection",
    initialState: {
        collectionData:[]
    },
    reducers: {
        setCollectionData(state, action) {
            state.collectionData = [...state.collectionData, action.payload]
        }
    }
})

export const {setCollectionData} = collectionsSlice.actions
export default collectionsSlice.reducer