import React from 'react'
import { useState, useEffect } from 'react';
import {Box, Stack, Typography} from '@mui/material';

import './App.css';

import { fetchFromAPI } from '../assets/fetchFromAPI';
import {Sidebar, Videos} from './';


const Feed = () => {

  const [selectedItem, setSelectedItem] = useState('New');
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedItem}`).then((data) => setVideos(data.items));
  }, [selectedItem]);
  
  return (
    <Stack className='feed-container' sx={{ flexDirection: {sx: "column", md:"row"}}}>
      <Box className="box" sx={{height: {sx: 'auto', md: '92vh'}, px: {sx: 0, md: 2}}}>
    
    <Sidebar 
      selectedItem = {selectedItem} 
      setSelectedItem = {setSelectedItem}
    />
    
    <Typography className="copyright" variant='body2'>
      Copyright 2023 HyperionDev Course
    </Typography>
      </Box>

      <Box className="box-feed">
        <Typography className='feed-span' variant='h4'>
         {selectedItem} <span style={{color: '#f50000'}}>videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed