"use client";

import { useEffect } from 'react';

export default function ScrollGradientBackground() {
  useEffect(() => {
    const handleScroll = () => {
      // Get the scroll position as a percentage of the total scroll height
      const scrollPosition = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      
      // Map the scroll position to control the background position
      const backgroundPositionX = scrollPosition * 200; // Adjust this value for movement speed

      // Update the CSS variable for the background position
      document.documentElement.style.setProperty('--bg-position-x', `${backgroundPositionX}%`);
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null; // This component doesn't render anything
}