import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { removeMovie } from "../movieSlice";

export const MovieList = ()=>{
    const movies = useSelector((state)=>state.movie.movies)
    const dispacher = useDispatch()

    const handleDelete = (id)=>{
        dispacher(removeMovie(id))
    }
    return (
    <>
        <h1>Movie List</h1>
        {movies.map((data)=>(
            <div key={data.id}>
                <label>Title:</label> {data.name} &nbsp;&nbsp; <label>rating:</label> {data.rating}
            <button onClick={()=>handleDelete(data.id)} >delete</button>
            </div>
        ))}
    </>
);
    
}