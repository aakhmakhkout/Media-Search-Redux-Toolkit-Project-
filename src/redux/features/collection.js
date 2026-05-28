import { createSlice } from "@reduxjs/toolkit";


export const collectionsSlice = createSlice({
    name:"collection",
    initialState: {
        collectionData:[]
    },
    reducers: {
        setCollectionData(state, action) {
            if(state.collectionData.find((items)=>{
                return items.id === action.payload.id
            })) {
                return
            }
            else {
                state.collectionData = [...state.collectionData, action.payload]
            }
        }
    }
})

export const {setCollectionData} = collectionsSlice.actions
export default collectionsSlice.reducer