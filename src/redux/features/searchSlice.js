import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        query: "",
        activetab: "Photos",
        results:[],
        loading:false,
        error:null,
        page:"homepage"
    },
    reducers:{
        setQuery(state, action) {
            state.query = action.payload
        },
        setResults(state, action) {
            state.results = action.payload
            state.loading = false
        },
        setActiveTab(state, action) {
            state.activetab = action.payload
        },
        setLoading(state) {
            state.loading = true,
            state.error = null
        },
        setError(state, action) {
            state.error = action.payload
            state.loading = false
        },
        clearResults(state){
            state.results = []
        }
        
    }
})

export const {setQuery, setResults, setActiveTab, setLoading, setError, clearResults} = searchSlice.actions

export default searchSlice.reducer