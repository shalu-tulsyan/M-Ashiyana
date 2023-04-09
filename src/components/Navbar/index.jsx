import React from 'react';
import { NavLink } from "react-router-dom";
import logo from '../../assets/images/logo.jpg';

export default function Navbar() {

    const isActiveLink = 'font-bold underline-offset-0 bg-red-300 flex items-center px-2';
    const isNotActiveLink = 'flex items-center';
    return(
        <div className='bg-red-700 flex justify-between items-stretch gap-4 h-full '>
            <div>
                <a  className='flex items-center justify-center m-2' href='/'>
                    <img className='w-14 h-14 p-2 rounded-full' src={logo} alt='logo' />
                    <h3 className='text-white'>M-Ashiyana</h3>
                </a>
                
            </div>
            <div>
                <div className='text-white flex gap-6  justify-center h-full '>
                    <NavLink to='/' className={({isActive})=>(isActive ? isActiveLink : isNotActiveLink )}>Home</NavLink>
                    <NavLink to='/about' className={({isActive})=>(isActive ? isActiveLink : isNotActiveLink )}>About us</NavLink>
                    <NavLink to='/explore' className={({isActive})=>(isActive ? isActiveLink : isNotActiveLink )}>Explore</NavLink>
                    <NavLink to='/contact' className={({isActive})=>(isActive ? isActiveLink : isNotActiveLink )}>Contact</NavLink>
                </div>
            </div>
            
            <div className=' flex justify-center items-center px-10'>
                <button className='text-white bg-black rounded-md px-7 py-1'>Log in</button>
            </div>
        </div >
    )
}