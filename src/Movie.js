import React, { useState } from 'react'
import { Counter } from './Counter'
import {Button, IconButton,Card,CardContent,CardActions} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';


// export default function Movie({ movieTake})

export const Movie = ({movieTake}) => {
    const [show, setShow] = useState(false);
    const navigate= useNavigate()
  return (
    
        <Card className='movie-container'>
          <img className='movie-poster'src={movieTake.poster}  />
            <CardContent className='movie-spec'>
                <h3 className="movie-name">{movieTake.name} </h3>
                <span className='movie-year'>{movieTake.year}</span>
                {/* {show? 
                <IconButton color='primary' aria-label="toggle" onClick={() => setShow(!show)}><ExpandLessIcon /></IconButton>:
                <IconButton color='primary' aria-label="toggle" onClick={() => setShow(!show)}><ExpandMoreIcon /></IconButton>}
                <IconButton color='primary' aria-label="info" onClick={()=>navigate(`/portal/view/${movieTake.id}`)} ><InfoIcon /></IconButton>
                
                <h3 className='movie-rating'>⭐{movieTake.rating}</h3>  */}

            </CardContent>
            
                <CardActions>
                {show? 
                <IconButton color='primary' aria-label="toggle" onClick={() => setShow(!show)}><ExpandLessIcon /></IconButton>:
                <IconButton color='primary' aria-label="toggle" onClick={() => setShow(!show)}><ExpandMoreIcon /></IconButton>}
                <IconButton color='primary' aria-label="info" onClick={()=>navigate(`/portal/view/${movieTake.id}`)} ><InfoIcon /></IconButton>
                
                <h3 className='movie-rating'>⭐{movieTake.rating}</h3>
                  <Counter/>
                  <IconButton sx={{marginLeft:"auto"}}
                aria-label='editMovie' onClick={()=> navigate(`/portal/edit/${movieTake.id}`)}>
                  <EditIcon />
                </IconButton>
                </CardActions>
                
                {show? <p className='movie-overview'>
                {movieTake.summary}
                </p> : null}
                
                
        </Card>
    
  )
}
