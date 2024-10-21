import React from 'react';

function HomeView() {
  return (
    <section id="home" className="flex items-center justify-center h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-2xl mb-8">I'm dillguill, a Full Stack Developer.</p>
        {/* <a href="#projects" className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition shadow-neumorphic-inset">
          View Projects
        </a> */}
      </div>
    </section>
  );
}

export default HomeView;