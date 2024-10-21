import React from 'react';

function Navbar() {
  return (
    <nav className="bg-black shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">Magic</div>

        {/* Nav Links */}
        <div className="flex space-x-4">
          <a href="#features" className="text-gray-400 hover:text-white transition duration-300">Features</a>
          <a href="#examples" className="text-gray-400 hover:text-white transition duration-300">Examples</a>
          <a href="#download" className="text-gray-400 hover:text-white transition duration-300">Free download</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;