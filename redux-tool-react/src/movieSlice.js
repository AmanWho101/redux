import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    movies:[
        {
            id:1, 
            name:"free",
            rating:5
        },
        {
            id:2, 
            name:"zombie",
            rating:6
        },
    ],
}

const movieSlice = createSlice({
    name:'movies',
    initialState,
    reducers:{
        addMovie:(state, action)=>{
            const newMoview = {
                id: state.movies.length+1,
                name: action.payload.movie_name,
                rating: Number(action.payload.rating),
            }
            
            state.movies.push(newMoview)
        },
        removeMovie:(state, action)=>{
            state.movies= state.movies.filter(
                (movie) => movie.id!==action.payload
            )

        },
        editMovie:(state, action)=>{
            
        },
    }
})
export const {addMovie, removeMovie, editMovie} = movieSlice.actions;
export default movieSlice.reducer