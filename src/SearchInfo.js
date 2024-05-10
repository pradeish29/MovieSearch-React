import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Button, IconButton,Card,CardContent,CardActions} from '@mui/material';


export const SearchInfo = () => {
    const {id} =useParams()
    const[movie,setMovie]=useState([]);
    console.log(id)
    useEffect(()=>{
        fetch(`https://www.omdbapi.com/?i=${id}&apikey=8a79b2fd`,{
        method: "GET"})
        .then((data)=> data.json())
        .then((mv)=> setMovie(mv))
        
    }, [])
    
    const navigate= useNavigate()

  return (
    <div className='searchinfo'>
    <img className='movie-poster-search'src={movie.Poster}/>
        <Card className='movie-container'>     
                 <CardContent className='movie-spec'> <Button className='backbut'  onClick={()=>navigate(-1)} ><ArrowBackIcon /></Button>
                     <h1 className='movie-rating'>{movie.Title}</h1>
                     <h3 className='movie-rating'>{movie.Year}</h3>
                     <h3 className='movie-rating'>Rating: ⭐{movie.imdbRating}</h3>
                     <h3 className='movie-rating'>Genre: {movie.Genre}</h3>
                     <h3 className='movie-rating'>Director: {movie.Director}</h3>
                     <h3 className='movie-rating'>Actors: {movie.Actors}</h3>
                 </CardContent>
                 <p className='movie-sum'>{movie.Plot}</p>
                
             
         </Card>
         </div>
  )
}