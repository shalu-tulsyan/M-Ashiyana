import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { GrDocumentText } from 'react-icons/gr';
import { TfiWorld } from 'react-icons/tfi';
import { BsFillJournalBookmarkFill,BsPersonFill} from 'react-icons/bs';

export default function SlideBar({handletoggle}) {
    const linkStyles = 'w-full flex justify-center items-center gap-3 text-2xl font-medium';
       
    return (
        <div className='flex flex-col h-full'>
            <div className='h-5/6 flex flex-col items-center justify-center gap-5  '>
                {/* <div> */}
                        
                    <Link onClick={handletoggle} to='/' className={linkStyles} >
                        <AiFillHome className='text-xl' />Home
                    </Link>
                        
                    <Link to='/about' className={linkStyles} >
                        <GrDocumentText className='text-xl' />About
                    </Link>
                        
                    <Link to='/explore' className={linkStyles} >
                        <TfiWorld className='text-xl' />Explore
                    </Link>
                        
                    <Link to='/blogs' className={linkStyles} >
                        <BsFillJournalBookmarkFill className='text-xl' />Blogs
                    </Link>
                        
                    <Link to='/contact' className={linkStyles} >
                        <BsPersonFill className='text-xl' />Contact
                    </Link>
                {/* </div> */}
                
            </div>
            <div className='flex-1 flex flex-col justify-center items-center  bg-gray-900 text-white text-3xl '>
                <button>Donate</button>
            </div>
        </div>
    )
}