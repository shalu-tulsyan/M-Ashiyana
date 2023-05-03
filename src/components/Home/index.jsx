import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import image from '../../assets/images/background.jpg'

export default function Home() {
    return (
        <div >
            <div className='h-screen flex flex-col'>
                <Navbar />
                <div style={{ backgroundImage: `url(${image})` }} className="flex-1 bg-cover bg-no-repeat relative">
                    <div className='absolute h-full bg-blackOverlay top-0 bottom-0 left-0 right-0'></div>
                </div>
            </div>
            <Footer />
        </div>
    )
}