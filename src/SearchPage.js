import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Counter } from './Counter';
import { Grid, Card,CardActions,IconButton, CardContent} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';


const API_KEY = '8a79b2fd';

const SearchPage = () => {
    const { searchQuery } = useParams();
    const [movies, setMovies] = useState([]);
    const navigate= useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://www.omdbapi.com/?s=${searchQuery}&apikey=${API_KEY}`);
                console.log(response.data.Search)
                if (response.data.Search) {
                    setMovies(response.data.Search);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [searchQuery]);

    return (
        <div>
        <h2 className='header'>Search result for "{searchQuery}"</h2>
        <div className='movie-list'> 
            {movies.map((movie) => (
                <Grid item key={movie.imdbID} xs={12} sm={6} md={4} lg={3}>
        <Card className='movie-container'>
        <img className='movie-poster'src={movie.Poster}  />
        <CardContent className='movie-spec'>
            <h3 className="movie-name">{movie.Title}</h3>
            <span className="movie-year">{movie.Year}</span>
            {/* <h3 className="movie-name">Year: {movie.Year}</h3> */}
            </CardContent>
            <CardActions>
            <IconButton color='primary' aria-label="info" onClick={()=>navigate(`/portal/searchinfo/${movie.imdbID}`)} ><InfoIcon /></IconButton>
            
            <Counter/>
           
            </CardActions>
            
        </Card>
                </Grid>
            ))}
        </div></div>
    );
};

export default SearchPage;




{/* <Card>
<CardActionArea>
    <CardMedia
        component="img"
        height="340"
        image={movie.Poster}
        alt={movie.Title}
    />
    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {movie.Title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Year: {movie.Year}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Type: {movie.Type}
        </Typography>
    </CardContent>
</CardActionArea>
</Card> */}