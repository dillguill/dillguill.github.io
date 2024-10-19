"use client";  // To manage state and interact with the DOM

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);  // Manage mobile menu state
  const [darkMode, setDarkMode] = useState(false);  // Manage dark/light mode

  // Check for user's theme preference on load
  useEffect(() => {
    const root = window.document.documentElement;
    const initialTheme = localStorage.getItem('theme');
    if (initialTheme === 'dark') {
      root.classList.add('dark');
      setDarkMode(true);
    } else {
      root.classList.remove('dark');
      setDarkMode(false);
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setDarkMode(!darkMode);
  };

  return (
    <header className="p-4 bg-beige dark:bg-space-gray fixed w-full z-20 top-0 left-0 backdrop-blur-lg">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo / Brand Name */}
        <div className="text-3xl font-bold">
          Explore the Galaxy
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
          
          {/* Dark/Light Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="ml-4 p-2 border-2 border-yellow-500 text-yellow-500 font-bold rounded-lg hover:bg-yellow-500 hover:text-black transition-colors"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="block md:hidden text-2xl focus:outline-none">
          {isOpen ? '✖' : '☰'}  {/* Icon toggles between "X" and "☰" */}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-beige dark:bg-space-gray backdrop-blur-lg text-center md:hidden">
            <a href="#home" className="block py-4 border-b border-gray-300" onClick={toggleMenu}>Home</a>
            <a href="#projects" className="block py-4 border-b border-gray-300" onClick={toggleMenu}>Projects</a>
            <a href="#about" className="block py-4 border-b border-gray-300" onClick={toggleMenu}>About</a>
            <a href="#contact" className="block py-4" onClick={toggleMenu}>Contact</a>
            
            {/* Dark/Light Mode Toggle in Mobile */}
            <button
              onClick={toggleDarkMode}
              className="w-full py-4 border-t border-gray-300 text-yellow-500 font-bold hover:bg-yellow-500 hover:text-black transition-colors"
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}