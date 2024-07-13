import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Aboutme from './components/Aboutme';
import Projects from './components/Projects';
import Skills from './components/Skills';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import Contact from './components/Contact';
import Banner from './components/Banner';
import Samplelogo from './components/Samplelogo';

export default function App() {
  return (
   <>
    <Router>
      <Navbar/>
      <Banner/>
      <Routes>
        <Route path="/" element={<Aboutme/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>

    </Router>
   </>
  )
}
