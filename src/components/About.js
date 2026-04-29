import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
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
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: 'easeOut' },
  }),
};

const About = () => {
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

        {/* Bio */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-center text-[var(--text-secondary)] leading-relaxed max-w-prose"
        >
          Full-stack developer based in Houston, TX. I build AI-powered tools,
          web applications, and production-grade integrations. Background in LLM
          pipelines, RAG architecture, ecommerce, and cloud infrastructure.
          AWS certified, always building.
        </motion.p>

        {/* Social links */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
        >
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
        </motion.div>

      </div>
    </section>
  );
};

export default About;