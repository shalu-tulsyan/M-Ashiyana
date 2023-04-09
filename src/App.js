import React from 'react';
import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';
import Contact from './components/ContactUs';
import Explore from './components/Explore';
import About from './components/AboutUs';
import Home from './components/Home';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/contact" element={<Contact/>} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home/>} />
      </Routes>
      
          
      
    </div>
  );
}

export default App;
