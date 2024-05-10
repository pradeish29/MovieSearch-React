import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Grid, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSearch = () => {
        if (inputValue.trim() !== '') {
            navigate(`/portal/search/${inputValue.trim()}`);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
            setInputValue(" ");

        }
    };

    return (
        <Grid container alignItems="center" spacing={2}>
            {/* <Grid item>
               
            </Grid> */}
            <Grid item xs className='search'>
                <TextField className='search-bar'
                    fullWidth
                    value={inputValue}
                    onKeyDown={handleKeyPress}
                    onChange={handleChange}
                    placeholder="Search Movies"
                    variant="outlined"
                >
                     <IconButton onClick={handleSearch}>
                    <SearchIcon />
                </IconButton>
                </TextField>
                
            </Grid>
        </Grid>
    );
};

export default SearchBar;
