import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLink } from 'react-icons/fa';

const Projects = ({ projectsData }) => {
  return (
    <section id="projects" className="py-12 pt-24">
      <div className="container mx-auto px-6">
        {/* <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2> */}
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 ">
          {projectsData.map(project => (
            <div
              key={project.id}
              className="shadow-xl rounded-xl p-6 transition-colors border border-[var(--border-color)] text-[var(--text-primary)]"
            >
              <Link
                href={`/projects/${project.id}`}
                className="text-xl font-bold mb-2 hover:opacity-70 transition-opacity text-[var(--text-primary)]"
                aria-label={`View ${project.title} details`}
              >
                {project.title}
              </Link>
              <p className="mb-4 text-[var(--text-secondary)]">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech && project.tech.map(tech => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs rounded border bg-[var(--bg-primary)] text-[var(--text-primary)] border-[var(--border-color)]"
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
                    className="hover:opacity-70 transition-opacity text-[var(--text-primary)]"
                    aria-label="GitHub repository"
                  >
                    <FaGithub size={20} />
                  </a>
                )}
                <Link
                  href={`/projects/${project.id}`}
                  className="hover:opacity-70 transition-opacity text-[var(--text-primary)]"
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
