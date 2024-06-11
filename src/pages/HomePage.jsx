import React from 'react'
import '../styles/HomePage.css'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'

const HomePage = () => {
    const navigate = useNavigate()
  return (
    <div>
        <div className="main-home-box">
        <p className='para-text'>Welcome to Food's Kitchen</p>
        <Button variant='contained' sx={{backgroundColor:"rgb(63,81,181)"}} onClick={()=> navigate("/menu")}>Go To Menu</Button>
        </div>
    </div>
  )
}

export default HomePage