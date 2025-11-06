import React from 'react';
import { FaEnvelope, FaFileAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'Email',
      icon: FaEnvelope,
      url: 'mailto:your.email@example.com',
      color: 'var(--accent-color)'
    },
    {
      name: 'Resume',
      icon: FaFileAlt,
      url: '/resume.pdf',
      color: 'var(--accent-color)'
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/yourusername',
      color: 'var(--accent-color)'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/yourusername',
      color: 'var(--accent-color)'
    }
  ];

  return (
    <section id="socials" className="py-12 min-h-screen pt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : undefined}
                  rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-6 rounded-lg transition-all duration-200 hover:opacity-70 border"
                  style={{
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)'
                  }}
                >
                  <Icon size={24} style={{ color: 'var(--text-primary)' }} />
                  <span className="text-xl font-medium">{link.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;

