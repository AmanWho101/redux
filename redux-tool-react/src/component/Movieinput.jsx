import React from "react"
import { useState } from "react"
import {addMovie} from '../movieSlice'
import { useDispatch } from "react-redux"

export const Movieinput = () =>{
    const [newMovie, setNewMovie] = useState('')
    const dispatch = useDispatch()
    const handleClick = () =>{
        if(newMovie){
            dispatch(addMovie(newMovie))
            setNewMovie("")
        }
    }

    return(
        <>
        <input type="text" name="movie_name" value={newMovie} onChange={(e)=>setNewMovie(e.target.value)} />
        <button type="submit" onClick={handleClick}>Add Movie</button>
        </>
    )
}