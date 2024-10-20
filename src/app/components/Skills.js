"use client";
import "./Skills.css";

export default function SkillsShowcase() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold uppercase mb-16">
          Skills & Tech
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Front-End Technologies */}
          <div className="skill-card dark">
            <img
              src="/icons/html.svg"
              alt="HTML Icon"
              className="skill-icon dark"
            />
            {/* Fine Progress Bar */}
            <div className="progress-bar">
              <div className="progress-bar-fill w-[80%]"></div>
            </div>
            <h3 className="skill-card-name">HTML</h3>
            <p>Building the structure of websites.</p>
          </div>
          <div className="skill-card dark">
            <img
              src="/icons/css3.svg"
              alt="CSS Icon"
              className="skill-icon dark"
            />
            {/* Fine Progress Bar */}
            <div className="progress-bar">
              <div className="progress-bar-fill w-[30%]"></div>
            </div>
            <h3 className="skill-card-name">CSS</h3>
            <p>Styling and layout of web pages.</p>
          </div>
          <div className="skill-card dark">
            <img
              src="/icons/javascript.svg"
              alt="JavaScript Icon"
              className="skill-icon dark"
            />
            {/* Fine Progress Bar */}
            <div className="progress-bar">
              <div className="progress-bar-fill w-[15%]"></div>
            </div>
            <h3 className="skill-card-name">JavaScript</h3>
            <p>Adding interactivity to web pages.</p>
          </div>

          {/* React */}
          <div className="skill-card dark">
            <img
              src="/icons/react.svg"  // Assuming you placed it in the icons folder
              alt="React Icon"
              className="skill-icon dark"
            />
            {/* Fine Progress Bar */}
            <div className="progress-bar">
              <div className="progress-bar-fill w-[30%]"></div>
            </div>
            <h3 className="skill-card-name">React</h3>
            <p>A JavaScript library for building user interfaces.</p>
          </div>

          <div className="skill-card dark">
            <img
              src="/icons/tailwind-css.svg"
              alt="Tailwind CSS Icon"
              className="skill-icon dark"
            />
            {/* Fine Progress Bar */}
            <div className="progress-bar">
              <div className="progress-bar-fill w-[15%]"></div>
            </div>
            <h3 className="skill-card-name">Tailwind CSS</h3>
            <p>
              Utility-first CSS framework for rapid UI development.
            </p>
          </div>

          {/* Bootstrap */}
          <div className="skill-card dark">
            <img
              src="/icons/bootstrap.svg"
              alt="Bootstrap Icon"
              className="skill-icon dark"
            />
            {/* Fine Progress Bar */}
            <div className="progress-bar">
              <div className="progress-bar-fill w-[20%]"></div>
            </div>
            <h3 className="skill-card-name">Bootstrap</h3>
            <p>Responsive design framework for modern web apps.</p>
          </div>

          {/* Back-End Technologies (Grayed Out) */}
          <div className="skill-card coming-soon">
            <img
              src="/icons/nodejs.svg"
              alt="Node.js Icon"
              className="skill-icon dark"
            />
            {/* Fine Progress Bar */}
            <div className="progress-bar">
              <div className="progress-bar-fill w-[0%]"></div>
            </div>
            <h3 className="skill-card-name">Node.js</h3>
            <p>Coming Soon</p> {/* Backend JavaScript runtime environment. */}
          </div>

          {/* Python */}
          <div className="skill-card coming-soon">
            <img
              src="/icons/python.svg"
              alt="Python Icon"
              className="skill-icon dark"
            />
            {/* Fine Progress Bar */}
            <div className="progress-bar">
              <div className="progress-bar-fill w-[0%]"></div>
            </div>
            <h3 className="skill-card-name">Python</h3>
            <p>Coming Soon</p> {/* Backend programming language. */}
          </div>

          {/* Django */}
          <div className="skill-card coming-soon">
            <img
              src="/icons/django.svg"
              alt="Django Icon"
              className="skill-icon dark"
            />
            {/* Fine Progress Bar */}
            <div className="progress-bar">
              <div className="progress-bar-fill w-[0%]"></div>
            </div>
            <h3 className="skill-card-name">Django</h3>
            <p>Coming Soon</p> {/* Placeholder text */}
          </div>

          {/* Docker */}
          <div className="skill-card coming-soon">
            <img
              src="/icons/docker.svg"
              alt="Docker Icon"
              className="skill-icon dark"
            />
            {/* Fine Progress Bar */}
            <div className="progress-bar">
              <div className="progress-bar-fill w-[0%]"></div>
            </div>
            <h3 className="skill-card-name">Docker</h3>
            <p>Coming Soon</p> {/* Placeholder text */}
          </div>

          {/* Git */}
          <div className="skill-card dark">
            <img
              src="/icons/git.svg"
              alt="Git Icon"
              className="skill-icon dark"
            />
            {/* Fine Progress Bar */}
            <div className="progress-bar">
              <div className="progress-bar-fill w-[0%]"></div>
            </div>
            <h3 className="skill-card-name">Git</h3>
            <p>Version control and collaboration.</p>
          </div>
        </div>
      </div>
    </section>
  );
}