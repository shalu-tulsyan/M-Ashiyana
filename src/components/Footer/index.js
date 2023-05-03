import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className='bg-red-700'>
            <div className='flex justify-between'>
                <div>
                    <h3>Get to know us</h3>
                    <div className='flex flex-col'>
                        <Link>Home</Link>
                        <Link>About</Link>
                        <Link>Blogs</Link>
                        <Link>Explore</Link>
                    </div>
                </div>
                <div>
                <h3>Connect with us</h3>
                    <div className='flex flex-col'>
                        <Link>Contact us</Link>
                        <Link>Help centre</Link>
                    </div>
                </div>
                <div>
                <h3>Donate</h3>
                    <div className='flex flex-col'>
                        <Link>Monthly Giving</Link>
                        <Link>Fundraisers</Link>
                    </div>
                </div>
            </div>
            <hr className='py-4 mx-10 border-black ' />
            <div className='flex justify-between'>
                <div>&copy;MA</div>
                <div>Donation through this platform are tax exempted</div>
                <div className='flex'>
                    <p>Terms</p>
                    <p>Privacy Policy</p>
                    <p>Site Map</p>
                </div>
            </div>
        </div>
    )
}