import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import SearchBar from './SearchBar'


export default function Topbar({mode,setMode}) {
  const navigate = useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className='nav'>
          <h1><Button className="logo" color="inherit" onClick={()=>navigate('/portal/home')}>MOVIEHUB</Button></h1>
          <SearchBar/>
          <Button 
          startIcon={mode==="light"? <Brightness7Icon/> :<Brightness4Icon/>}
          color="inherit"
          onClick={()=> setMode(mode === "light" ? "dark" :"light")}>
          </Button>
          
          {/* <Button color="inherit" onClick={()=>navigate('/portal/movie')}>Movies</Button> */}
          <Button color="inherit" onClick={()=>navigate('/portal/addmovie')}>AddMovie </Button>
          <Button color="inherit" onClick={()=>navigate('/portal/register')}>Register</Button>
          <Button color="inherit" onClick={()=>navigate('/portal/login')}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
