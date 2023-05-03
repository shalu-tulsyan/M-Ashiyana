import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Contact from './components/ContactUs';
import Explore from './components/Explore';
import About from './components/AboutUs';
import Home from './components/Home';
import Blogs from './components/Blogs';


function App() {
  return (
      <Routes>
        <Route path="/contact" element={<Contact/>} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs/>} />
      </Routes>
  );
}

export default App;
