"use client"; // Required for Next.js

import { useEffect } from 'react';
import initBlobAnimation from './BlobAnimation';

const BlobBackground = () => {
  useEffect(() => {
    // Initialize the blob animation when the component mounts
    initBlobAnimation();
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10"> {/* Set the blob animation behind the content */}
      <canvas id="bubble" className="w-full h-full"></canvas>  {/* Ensure the canvas covers the full screen */}
    </div>
  );
};

export default BlobBackground;