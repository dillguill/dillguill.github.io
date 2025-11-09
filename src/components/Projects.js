import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLink } from 'react-icons/fa';
import { projectsData } from '../projects';

const Projects = () => {
  return (
    <section id="projects" className="py-12 pt-24">
      <div className="container mx-auto px-6">
        {/* <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2> */}
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 ">
          {projectsData.map(project => (
            <div
              key={project.id}
              className="shadow-xl rounded-xl p-6 transition-colors"
              style={{
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)'
              }}
            >
              <Link
                to={`/projects/${project.id}`}
                className="text-xl font-bold mb-2 hover:opacity-70 transition-opacity"
                style={{ color: 'var(--text-primary)' }}
                aria-label={`View ${project.title} details`}
              >
                {project.title}
              </Link>
              <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech && project.tech.map(tech => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs rounded border"
                    style={{
                      backgroundColor: 'var(--bg-primary)',
                      color: 'var(--text-primary)',
                      borderColor: 'var(--border-color)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-70 transition-opacity"
                    style={{ color: 'var(--text-primary)' }}
                    aria-label="GitHub repository"
                  >
                    <FaGithub size={20} />
                  </a>
                )}
                <Link
                  to={`/projects/${project.id}`}
                  className="hover:opacity-70 transition-opacity"
                  style={{ color: 'var(--text-primary)' }}
                  aria-label={`View ${project.title} details`}
                >
                  <FaLink size={20} />
                </Link>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
