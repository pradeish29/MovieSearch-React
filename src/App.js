import './App.css';
import { Addmovie } from './Addmovie';
import { Register } from './Register';
import { Routes,Route } from 'react-router-dom';
import {Login} from './Login';
import { Portal } from './Portal';
import { Home } from './Home';
import { NotFound } from './NotFound';
import { MovieList } from './MovieList';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';
import { Paper } from '@mui/material';
import { MovieDetail } from './MovieDetail';
import { EditMovie } from './EditMovie';
import SearchPage from './SearchPage';
import { SearchInfo } from './SearchInfo';

function App() {
  const[mode,setMode]=useState("dark")
  const darkTheme = createTheme({
  palette: {
    mode: mode,
  },
});
return (
    <div className="App">
    <ThemeProvider theme={darkTheme}>
      <Paper   style={{minHeight:"100vh",borderRadius:"0%"}} elevation={5}>
      <Routes>
      
     
      <Route  path="/portal" element={<Portal mode={mode} setMode={setMode}/>}>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path='addmovie' element={<Addmovie/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='searchinfo/:id' element={<SearchInfo/>}/>
        <Route path='view/:id' element={<MovieDetail/>}/>
        <Route path='edit/:id' element={<EditMovie/>}/>
        <Route path='search/:searchQuery' element={<SearchPage/>}/>
      </Route>
      <Route path='*' element={<NotFound/>}/>
     </Routes>
     </Paper> 
    </ThemeProvider>
    </div>
  );
}

export default App;
