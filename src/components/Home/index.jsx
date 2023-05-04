import React,{useState} from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import SlideBar from '../SlideBar';
import image from '../../assets/images/background.jpg';

export default function Home() {

    const [toggle, setToggle] = useState(false);

    function handleToggle() {
        setToggle(!toggle); 
    }

    return (
        <div className={`${toggle?'overflow-hidden':''} relative`} >
            <div className='h-screen flex flex-col'>
                <Navbar toggle={toggle} handleToggle={handleToggle} />
                {!toggle && <div style={{ backgroundImage: `url(${image})` }} className="flex-1 z-40 bg-cover bg-no-repeat relative">
                    <div className='absolute h-full bg-blackOverlay top-0 bottom-0 left-0 right-0'></div>
                </div>}
                {
                toggle &&
                <div id="slideBar" className='absolute w-full z-50 top-0 bottom-0 mt-20 translate-x-full bg-white duration-500 ease-in-out transition-all '>
                    <SlideBar handletoggle={handleToggle} />       
                </div>
            }
            </div>
            {!toggle && <Footer />}
        </div>
    )
}