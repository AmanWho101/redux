import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { removeMovie,editMovie } from "../movieSlice";

export const MovieList = ()=>{
    const movies = useSelector((state)=>state.movie.movies)
    const dispacher = useDispatch()

    const handleDelete = (id) => {
        dispacher(removeMovie(id))
    }
    const handleEdit = (id) => {
        dispacher(editMovie(id))
    }
    return (
    <>
        <h1>Movie List</h1>
        {movies.map((data)=>(
            <div key={data.id}>
                <label>Title:</label> {data.name} &nbsp;&nbsp; <label>rating:</label> {data.rating}
                <button onClick={()=>handleDelete(data.id)} >delete</button>
                <button onClick={()=>handleEdit(data.id)} >Edit</button>
            </div>
        ))}
    </>
);
    
}