import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projectsData } from '../projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Project Not Found
          </h1>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
            style={{ color: 'var(--text-primary)' }}
          >
            <FaArrowLeft size={16} />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const Component = project.component;

  return (
    <section className="py-12 min-h-screen pt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 mb-8 hover:opacity-70 transition-opacity"
            style={{ color: 'var(--text-primary)' }}
          >
            <FaArrowLeft size={16} />
            Back to Projects
          </Link>

          {/* Project header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              {project.title}
            </h1>
            <p className="text-xl mb-6" style={{ color: 'var(--text-secondary)' }}>
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech && project.tech.map(tech => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-sm"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    color: 'var(--text-secondary)'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 rounded-lg transition-all duration-200 hover:opacity-70 border"
                  style={{
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)'
                  }}
                >
                  <FaExternalLinkAlt size={24} style={{ color: 'var(--text-primary)' }} />
                  <span className="text-xl font-medium">Live Demo</span>
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 rounded-lg transition-all duration-200 hover:opacity-70 border"
                  style={{
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)'
                  }}
                >
                  <FaGithub size={24} style={{ color: 'var(--text-primary)' }} />
                  <span className="text-xl font-medium">View Code</span>
                </a>
              )}
            </div>
          </div>

          {/* Project content */}
          <div
            className="prose prose-lg max-w-none"
            style={{
              color: 'var(--text-primary)',
              '--tw-prose-headings': 'var(--text-primary)',
              '--tw-prose-body': 'var(--text-secondary)',
              '--tw-prose-links': 'var(--accent-color)',
              '--tw-prose-code': 'var(--text-primary)',
              '--tw-prose-pre-bg': 'var(--bg-secondary)',
              '--tw-prose-blockquote-border': 'var(--border-color)'
            }}
          >
            <Component />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
