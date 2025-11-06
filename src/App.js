import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavbarSimple } from './components/Navbar';
import Header from './components/Header';
// import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
// import Resume from './components/Resume';
import Projects from './components/Projects';
import SocialLinks from './components/SocialLinks';
// import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/resume" element={<Resume />} /> */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/socials" element={<SocialLinks />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <NavbarSimple />
      {/* <Footer /> */}
    </Router>
  );
}

export default App;