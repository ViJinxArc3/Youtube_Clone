import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './App.css';

const SearchBar = () => {
  return (
    <Paper className="searchbar" sx={{borderRadius: '30px'}} component="form" onSubmit={() => {}} >
    <input className='search-bar' placeholder='Search' value="" onChange={() => {}} />
    <IconButton className='icon-btn' type='submit'>
        <SearchIcon />
    </IconButton>
    </Paper>
)
}

export default SearchBar