import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const MovieDetail = () => {
    const {id} =useParams()
    const[movie,setMovie]=useState([]);
    console.log(id)
    useEffect(()=>{
        fetch(`https://65f16b87034bdbecc76270c5.mockapi.io/movie/${id}`,{
        method: "GET"})
        .then((data)=> data.json())
        .then((mv)=> setMovie(mv))
    }, [])
    
    const navigate= useNavigate()

  return (
    <div className='info'>
        <div className='movie-container'>
            <div className='movie-spec'>
                <h1 className="movie-name">{movie.name}</h1>
                <h2 className='movie-rating'>⭐{movie.rating}</h2>
                
            </div>
            <p className='movie-summary'>{movie.summary}</p>
            <Button  onClick={()=>navigate(-1)} ><ArrowBackIcon /></Button>
        </div>
        <iframe width="853" height="480" src={movie.trailer}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

