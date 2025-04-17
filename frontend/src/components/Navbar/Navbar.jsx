import React from 'react'
import './Navbar.css'
import { LuSearch } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='left-nav'>
            <img src='src/assets/logonew.png' alt='Company Logo' className='logo'/>
            <h1 className='company-name'>CourseHub</h1>
            <ul className='nav-links'>
                <li><a href='/courses'>Courses</a></li>
                <li><a href='/categories'>Categories</a></li>
                <li><a href='/about'>About</a></li>
            </ul>
        </div>
        
        <div className='right-nav'>
            <ul className='nav-actions'>
                <li><a href='/cart' className='cart'><FiShoppingCart /></a></li>
                <li><a href='/login' className='login'>Login</a></li>
                <li><a href='/signup' className='signup'>Sign Up</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
