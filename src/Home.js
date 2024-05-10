import React from 'react'
import { Movie } from './Movie'
import { MovieList } from './MovieList'

export const Home = () => {
  return (
    <>
    <div className='home-image' >
        <h1 className="header">Welcome to Movie hub</h1>
        <h3>
          Millions of movies, TV shows, and Anime to discover. Explore now
        </h3>
    </div>
    
        <MovieList/>
        
    
    </>
  )
}
