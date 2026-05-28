import { createSlice } from "@reduxjs/toolkit";


export const collectionsSlice = createSlice({
    name:"collection",
    initialState: {
        collectionData:JSON.parse(localStorage.getItem("collectionItems")) || [],
        page:"collectionPage"
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
                localStorage.setItem("collectionItems", JSON.stringify(state.collectionData))
            }
        },
        removeCollection(state, action) {
            const updatedData = state.collectionData.filter((items)=> {
                return items.id !== action.payload.id 
            })
            state.collectionData = updatedData
            // localStorage.removeItem("collection")
            localStorage.setItem("collectionItems", JSON.stringify(updatedData))
        }
    }
})

export const {setCollectionData, removeCollection} = collectionsSlice.actions
export default collectionsSlice.reducer