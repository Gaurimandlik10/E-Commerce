import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from './components/Search';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import Home2 from "./components/Home2";
import Mens from "./components/Mens";
import Womens from "./components/Womens";
import Jwellary from "./components/Jwellary";
import Electronics from "./components/Electronics";
import About from "./components/About";

function App() {
  const [posts, setPosts] = useState([])


  return (
   <>
   <Search />,
   <Navbar />
  
   <BrowserRouter>
      <Routes>
      <Route index path="/" element={<Home2 />} />
        <Route path="/Mens" element={<Mens />} />
          <Route path="/Womens" element={<Womens />} />
          <Route path="/Jwellary" element={<Jwellary />} />
          <Route path="/Electronics" element={<Electronics />} />
          <Route path="/About" element={<About />} />
          
      </Routes>
    </BrowserRouter>
   
   
   
   
   
   </>
  );
}

export default App;
