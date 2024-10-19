"use client";

export default function SkillsShowcase() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold uppercase mb-16">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Front-End Technologies */}
          <div className="p-6 hover:text-yellow-500 transition-colors">
            <img
              src="/icons/html.svg"
              alt="HTML Icon"
              className="mx-auto w-16 h-16 mb-4"
            />
            {/* Fine Progress Bar */}
            <div className="w-full bg-gray-700 h-1 mb-4 rounded-lg">
              <div className="bg-yellow-500 h-1 rounded-lg" style={{ width: '80%' }}></div>
            </div>
            <h3 className="text-2xl font-semibold mb-4">HTML</h3>
            <p className="text-gray-400">Building the structure of websites.</p>
          </div>
          <div className="p-6 hover:text-yellow-500 transition-colors">
            <img
              src="/icons/css3.svg"
              alt="CSS Icon"
              className="mx-auto w-16 h-16 mb-4"
            />
            {/* Fine Progress Bar */}
            <div className="w-full bg-gray-700 h-1 mb-4 rounded-lg">
              <div className="bg-yellow-500 h-1 rounded-lg" style={{ width: '30%' }}></div>
            </div>
            <h3 className="text-2xl font-semibold mb-4">CSS</h3>
            <p className="text-gray-400">Styling and layout of web pages.</p>
          </div>
          <div className="p-6 hover:text-yellow-500 transition-colors">
            <img
              src="/icons/javascript.svg"
              alt="JavaScript Icon"
              className="mx-auto w-16 h-16 mb-4"
            />
            {/* Fine Progress Bar */}
            <div className="w-full bg-gray-700 h-1 mb-4 rounded-lg">
              <div className="bg-yellow-500 h-1 rounded-lg" style={{ width: '15%' }}></div>
            </div>
            <h3 className="text-2xl font-semibold mb-4">JavaScript</h3>
            <p className="text-gray-400">Adding interactivity to web pages.</p>
          </div>

          {/* React */}
          <div className="p-6 hover:text-yellow-500 transition-colors">
            <img
              src="/icons/react.svg"  // Assuming you placed it in the icons folder
              alt="React Icon"
              className="mx-auto w-16 h-16 mb-4"
            />
            {/* Fine Progress Bar */}
            <div className="w-full bg-gray-700 h-1 mb-4 rounded-lg">
              <div className="bg-yellow-500 h-1 rounded-lg" style={{ width: '20%' }}></div>
            </div>
            <h3 className="text-2xl font-semibold mb-4">React</h3>
            <p className="text-gray-400">A JavaScript library for building user interfaces.</p>
          </div>

          <div className="p-6 hover:text-yellow-500 transition-colors">
            <img
              src="/icons/tailwind-css.svg"
              alt="Tailwind CSS Icon"
              className="mx-auto w-16 h-16 mb-4"
            />
            {/* Fine Progress Bar */}
            <div className="w-full bg-gray-700 h-1 mb-4 rounded-lg">
              <div className="bg-yellow-500 h-1 rounded-lg" style={{ width: '10%' }}></div>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Tailwind CSS</h3>
            <p className="text-gray-400">
              Utility-first CSS framework for rapid UI development.
            </p>
          </div>

          {/* Bootstrap */}
          <div className="p-6 hover:text-yellow-500 transition-colors">
            <img
              src="/icons/bootstrap.svg"
              alt="Bootstrap Icon"
              className="mx-auto w-16 h-16 mb-4"
            />
            {/* Fine Progress Bar */}
            <div className="w-full bg-gray-700 h-1 mb-4 rounded-lg">
              <div className="bg-yellow-500 h-1 rounded-lg" style={{ width: '25%' }}></div>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Bootstrap</h3>
            <p className="text-gray-400">Responsive design framework for modern web apps.</p>
          </div>

          {/* Back-End Technologies (Grayed Out) */}
          <div className="p-6 transition-colors" style={{ filter: 'grayscale(100%)', opacity: 0.5 }}>
            <img
              src="/icons/nodejs.svg"
              alt="Node.js Icon"
              className="mx-auto w-16 h-16 mb-4"
            />
            {/* Fine Progress Bar */}
            <div className="w-full bg-gray-700 h-1 mb-4 rounded-lg">
              <div className="bg-yellow-500 h-1 rounded-lg" style={{ width: '0%' }}></div>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Node.js</h3>
            <p className="text-gray-400">Coming Soon</p> {/* Backend JavaScript runtime environment. */}
          </div>

          {/* Python */}
          <div className="p-6 transition-colors" style={{ filter: 'grayscale(100%)', opacity: 0.5 }}>
            <img
              src="/icons/python.svg"
              alt="Python Icon"
              className="mx-auto w-16 h-16 mb-4"
            />
            {/* Fine Progress Bar */}
            <div className="w-full bg-gray-700 h-1 mb-4 rounded-lg">
              <div className="bg-yellow-500 h-1 rounded-lg" style={{ width: '0%' }}></div>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Python</h3>
            <p className="text-gray-400">Coming Soon</p> {/* Backend programming language. */}
          </div>

          {/* Django */}
          <div className="p-6 transition-colors" style={{ filter: 'grayscale(100%)', opacity: 0.5 }}>
            <img
              src="/icons/django.svg"
              alt="Django Icon"
              className="mx-auto w-16 h-16 mb-4"
            />
            {/* Fine Progress Bar */}
            <div className="w-full bg-gray-700 h-1 mb-4 rounded-lg">
              <div className="bg-yellow-500 h-1 rounded-lg" style={{ width: '0%' }}></div>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Django</h3>
            <p className="text-gray-400">Coming Soon</p> {/* Placeholder text */}
          </div>

          {/* Docker */}
          <div className="p-6 transition-colors" style={{ filter: 'grayscale(100%)', opacity: 0.5 }}>
            <img
              src="/icons/docker.svg"
              alt="Docker Icon"
              className="mx-auto w-16 h-16 mb-4"
            />
            {/* Fine Progress Bar */}
            <div className="w-full bg-gray-700 h-1 mb-4 rounded-lg">
              <div className="bg-yellow-500 h-1 rounded-lg" style={{ width: '0%' }}></div>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Docker</h3>
            <p className="text-gray-400">Coming Soon</p> {/* Placeholder text */}
          </div>

          {/* Git */}
          <div className="p-6 hover:text-yellow-500 transition-colors">
            <img
              src="/icons/git.svg"
              alt="Git Icon"
              className="mx-auto w-16 h-16 mb-4"
            />
            {/* Fine Progress Bar */}
            <div className="w-full bg-gray-700 h-1 mb-4 rounded-lg">
              <div className="bg-yellow-500 h-1 rounded-lg" style={{ width: '10%' }}></div>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Git</h3>
            <p className="text-gray-400">Version control and collaboration.</p>
          </div>
        </div>
      </div>
    </section>
  );
}