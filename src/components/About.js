import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { FaUpwork } from 'react-icons/fa6';

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
  {
    name: 'Resume',
    icon: FaDownload,
    url: '/resume.pdf',
    download: true,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: 'easeOut' },
  }),
};

const About = ({ markdown }) => {
  return (
    <section id="about" className="min-h-screen pt-24 pb-24 px-6">
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-10">

        {/* Image */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="rounded-full overflow-hidden border border-[var(--border-color)] w-36 h-36 relative shrink-0"
        >
          <Image
            src="/images/profile.jpg"
            alt="Dillon Guillory"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full"
        >
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                {...(link.download
                  ? { download: true }
                  : { target: '_blank', rel: 'noopener noreferrer' })}
                className="flex items-center gap-4 p-6 rounded-lg transition-all duration-200 hover:opacity-70 border border-[var(--border-color)] text-[var(--text-primary)]"
              >
                <Icon size={24} className="text-[var(--text-primary)]" />
                <span className="text-xl font-medium">{link.name}</span>
              </a>
            );
          })}
        </motion.div>

        {/* GitHub profile README */}
        {markdown && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="w-full"
          >
            <div
              className="prose prose-lg max-w-none text-[var(--text-primary)] prose-h1:text-center"
              style={{
                '--tw-prose-headings': 'var(--text-primary)',
                '--tw-prose-body': 'var(--text-secondary)',
                '--tw-prose-links': 'var(--accent-color)',
                '--tw-prose-code': 'var(--code-fg)',
                '--tw-prose-pre-bg': 'var(--pre-bg)',
                '--tw-prose-blockquote-border': 'var(--accent-color)',
              }}
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {markdown}
              </ReactMarkdown>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default About;