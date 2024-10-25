// "use client"; // Required for Next.js

// import { useEffect, useRef } from 'react';
// import initBlobAnimation from './BlobAnimation';

// const BlobBackground = () => {
//   const blobRef = useRef(null);

//   useEffect(() => {
//     // Initialize the blob animation when the component mounts
//     initBlobAnimation();

//     // Add scroll event listener for parallax effect
//     const handleScroll = () => {
//       if (blobRef.current) {
//         const scrollY = window.scrollY;
//         // Parallax effect: Adjust blob background position based on scroll
//         blobRef.current.style.transform = `translateY(${scrollY * 0.1}px)`;  // 0.3 factor controls the parallax speed
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     // Cleanup the scroll event listener on component unmount
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div ref={blobRef} className="fixed top-0 left-0 w-full h-full -z-10">
//       <canvas id="bubble" className="w-full h-full"></canvas> {/* Ensure the canvas covers the full screen */}
//     </div>
//   );
// };

// export default BlobBackground;

"use client"; // Required for Next.js

import { useEffect } from 'react';
import initBlobAnimation from './BlobAnimation';

const BlobBackground = () => {
  useEffect(() => {
    // Initialize the blob animation when the component mounts
    initBlobAnimation();
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">  {/* Use 'fixed' to keep it in place */}
      <canvas id="bubble" className="w-full h-full"></canvas>  {/* Ensure the canvas covers the full screen */}
    </div>
  );
};

export default BlobBackground;