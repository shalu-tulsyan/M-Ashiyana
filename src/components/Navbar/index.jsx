import React, { useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { NavLink } from "react-router-dom";
import logo from '../../assets/images/logo.jpg';
import { MdDehaze } from "react-icons/md";

export default function Navbar({ handleToggle, toggle }) {
    
    useEffect(() => {
        if (toggle)
        {
            const slidebarDiv = document.getElementById('slideBar');
            slidebarDiv.classList.toggle('translate-x-full');

        }
        
    },[toggle])
    console.log(toggle);

    const isActiveLink = 'font-bold underline bg-red-600 flex justify-center items-center px-2 transition-all duration-300 ease-in-out';
    const isNotActiveLink = 'flex items-center px-1 transition-all duration-500 ease-in-out';
    return (
            <div className='bg-red-700 flex justify-between items-stretch gap-4 px-1 '>
                <div>
                    <a  className='flex items-center justify-center m-2 gap-x-2' href='/'>
                        <img className='w-20 h-20 p-1 md:w-18 md:h-18 md:p-2 rounded-full' src={logo} alt='logo' />
                        <h3 className='text-2xl md:text-md text-white'>M-Ashiyana</h3>
                    </a>
                    
                </div>
                <div className='hidden md:block text-2xl'>
                    <div className='text-white flex gap-6  justify-center h-full '>
                        <NavLink to='/' className={({isActive})=>(isActive ? isActiveLink : isNotActiveLink )}>Home</NavLink>
                        <NavLink to='/about' className={({isActive})=>(isActive ? isActiveLink : isNotActiveLink )}>About us</NavLink>
                        <NavLink to='/explore' className={({ isActive }) => (isActive ? isActiveLink : isNotActiveLink)}>Explore</NavLink>
                        <NavLink to='/blogs' className={({isActive})=>(isActive ? isActiveLink : isNotActiveLink )}>Blogs</NavLink>
                        <NavLink to='/contact' className={({isActive})=>(isActive ? isActiveLink : isNotActiveLink )}>Contact</NavLink>
                    </div>
                </div>
                
                <div className='hidden md:flex justify-center items-center'>
                    <button className='text-white bg-black rounded-md px-7 py-1 text-2xl'>Donate</button>
                </div>
                <div onClick={handleToggle} className='md:hidden flex justify-center items-center transition-all duration-500 ease-in-out'>
                    {
                        toggle ?<AiOutlineClose className='text-5xl ' /> :<MdDehaze className='text-5xl' /> 
                    }
                </div>    
            </div >
    )
}