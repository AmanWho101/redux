import React from "react"
import { useState } from "react"
import {addMovie} from '../movieSlice'
import { useDispatch } from "react-redux"

export const Movieinput = () =>{
    const [newMovie, setNewMovie] = useState({
        movie_name:'',
        rating:''
    })
    const dispatch = useDispatch()
    const handlechange = (e)=>{
        setNewMovie({...newMovie,[e.target.name]:e.target.value})
        console.log(newMovie)
    }
    const handleClick = () =>{
        if(newMovie){
            dispatch(addMovie(newMovie))
            setNewMovie({
                movie_name:'',
                rating:''
            })
        }
    }

    return(
        <>
       <label>Title:</label><input type="text" name="movie_name" value={newMovie.movie_name} onChange={handlechange} />
       <br/>
       <label>Rating:</label><input type="text" name="rating" value={newMovie.rating}  onChange={handlechange}  />
       <br/><button type="submit" onClick={handleClick}>Add Movie</button>
        </>
    )
}