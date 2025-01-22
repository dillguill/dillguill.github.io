import React, { useEffect, useState } from 'react';

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/dillguill/repos')
      .then(response => response.json())
      .then(data => setRepos(data));
  }, []);

  return (
    <section id="projects" className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {repos.map(repo => (
            <div key={repo.id} className="shadow-xl rounded-xl p-6 bg-transparent border border-gray-100">
              <h3 className="text-2xl font-bold mb-2">{repo.name}</h3>
              <p>{repo.description || 'No description provided.'}</p>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className=" font-bold hover:underline mt-2 block"
              >
                View Repository
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;