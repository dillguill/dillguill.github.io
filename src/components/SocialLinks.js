import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com/dillguill',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    url: 'https://www.linkedin.com/in/dillon-guillory/',
  },
];

const SocialLinks = () => {
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 rounded-lg transition-all duration-200 hover:opacity-70 border border-[var(--border-color)] text-[var(--text-primary)]"
                >
                  <Icon size={24} className="text-[var(--text-primary)]" />
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