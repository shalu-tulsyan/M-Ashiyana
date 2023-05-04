import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className='bg-red-700 text-white'>
            <div className='mx-auto py-4 max-w-4xl'>
                <div className='flex justify-between'>
                <div>
                    <h3 className='text-2xl font-bold'>Get to know us</h3>
                    <div className='flex flex-col text-lg text-indigo-200'>
                        <Link>Home</Link>
                        <Link>About</Link>
                        <Link>Blogs</Link>
                        <Link>Explore</Link>
                    </div>
                </div>
                <div>
                <h3  className='text-2xl font-bold'>Connect with us</h3>
                    <div className='flex flex-col text-lg text-indigo-200'>
                        <Link>Contact us</Link>
                        <Link>Help centre</Link>
                    </div>
                </div>
                <div>
                <h3 className='text-2xl font-bold'>Donate</h3>
                    <div className='flex flex-col text-lg text-indigo-200'>
                        <Link>Monthly Giving</Link>
                        <Link>Fundraisers</Link>
                    </div>
                </div>
                </div>
            </div>
            <hr className='py-2 mx-10 border-gray-500 ' />
            <div className='max-w-5xl mx-auto pb-4'>
                <div className='flex justify-between text-lg '>
                    <div>&copy;MA</div>
                    <div>Donation through this platform are tax exempted</div>
                    <div className='flex gap-4 px-4'>
                        <p>Terms</p>
                        <p>Privacy Policy</p>
                        <p>Site Map</p>
                    </div>
                </div>
            </div>
        </div>
    )
}