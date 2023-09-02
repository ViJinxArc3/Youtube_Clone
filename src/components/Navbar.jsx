import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import './App.css';

import {logo} from '../assets/constants';
import SearchBar from "./SearchBar";


const Navbar = () => (
  
    <Stack 
    className="stack-nav" 
    direction="row" 
    alignItems="center" >

      <Link to="/" style={{ display: 'flex', alignItems: 'center',}}>
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <SearchBar />
    </Stack>
  
)

export default Navbar