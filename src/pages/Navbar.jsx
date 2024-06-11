import React from 'react'
import '../styles/navbar.css'
import { Modal, Typography } from '@mui/material'
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import BasicModal from '../components/Modle';

const Navbar = () => {
    const count = localStorage.getItem("count");
    console.log(count);

   
  return (
    <div>
    <div className="main-box">
        <div className="navbar">
        <RestaurantIcon sx={{color:"white", marginLeft:"20px"}}/>
            <Typography variant='h5' sx={{color:"white",marginLeft:"20px"}} className='main-text'>Food's Restaurant</Typography>
        <LocalGroceryStoreIcon className='store-icon' /> 
        <p>{count}</p>

        </div>
    </div>
    </div>
  )
}

export default Navbar