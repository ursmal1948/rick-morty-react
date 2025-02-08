import {createSlice} from "@reduxjs/toolkit"

const charactersListSlice =createSlice({
    "name":"charactersList",
    initialState:{
        page:1,
        totalPages:null,
        totalResults:null,
        characters: [],
        status:"loading"
    },
    reducers:{
        fetchCharacters:(state,{payload:page})=>{
            state.page = page
        },
        fetchCharactersSuccess:(state,{payload:characters})=>{
            state.status="success";
            state.totalPages=characters.totalPages;
            state.totalResults = characters.totalResults;
            state.characters = characters.results
        },
        fetchCharactersError:(state,{payload})=>{
            state.status = payload.status;
        },
    },

});

export const {
    fetchCharacters,
    fetchCharactersSuccess,
    fetchCharactersError
 } = charactersListSlice.actions;
 
 export const selectCharactersListState = (state)=>state.charactersList;
 export const selectPage = (state)=>selectCharactersListState(state).page;
 export const selectTotalPages = (state)=>selectCharactersListState(state).totalPages;
 export const   selectTotalResults = (state)=>selectCharactersListState(state).totalResults;
 export const selectCharacters = (state)=>selectCharactersListState(state).characters;
 export const selectStatus = (state)=>selectCharactersListState(state).state;

export default charactersListSlice.reducer;
