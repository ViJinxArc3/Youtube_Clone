import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material';

//import components
import {Navbar, Feed, SearchFeed} from './components';


const App = () => (
  
   <BrowserRouter>
   <Box sx={{backgroundColor: '#fffff'}}>
    
    <Navbar/>
    <Routes>
        <Route path="/" exact element={<Feed />} />

    </Routes>


   </Box>
   
   </BrowserRouter>
)


export default App