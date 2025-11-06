import React, { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/dillguill/repos')
      .then(response => response.json())
      .then(data => setRepos(data));
  }, []);

  return (
    <section id="projects" className="py-12 pt-24">
      <div className="container mx-auto">
        {/* <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {repos.map(repo => (
            <div 
              key={repo.id} 
              className="shadow-xl rounded-xl p-6 transition-colors"
              style={{ 
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)'
              }}
            >
              {/* <h3 className="text-2xl font-bold mb-2">{repo.name}</h3> */}
              <h3 className="text-xl font-bold mb-2">{repo.description || 'No description provided.'}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{repo.topics}</p>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 mt-2 inline-block transition-opacity"
                aria-label="GitHub repository"
                style={{ color: 'var(--text-primary)' }}
              >
                <FaGithub size={24} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;