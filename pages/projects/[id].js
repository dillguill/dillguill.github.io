import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Header from '../../src/components/Header';
import { NavbarSimple } from '../../src/components/Navbar';
import Link from 'next/link';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsDirectory = path.join(process.cwd(), 'src/projects');

export async function getStaticPaths() {
  const filenames = fs.readdirSync(projectsDirectory);
  const mdxFiles = filenames.filter(file => file.endsWith('.mdx'));

  const paths = mdxFiles.map(file => ({
    params: {
      id: file.replace('.mdx', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const fullPath = path.join(projectsDirectory, `${params.id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter: data,
      mdxSource,
    },
  };
}

export default function ProjectDetail({ frontMatter, mdxSource }) {
  return (
    <>
      <Header />
      <section className="py-12 min-h-screen pt-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Back button */}
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 mb-8 hover:opacity-70 transition-opacity text-[var(--text-primary)]"
            >
              <FaArrowLeft size={16} />
              Back to Projects
            </Link>

            {/* Project header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-4 text-[var(--text-primary)]">
                {frontMatter.title}
              </h1>
              <p className="text-xl mb-6 text-[var(--text-secondary)]">
                {frontMatter.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {frontMatter.tech && frontMatter.tech.map(tech => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-sm bg-[var(--bg-secondary)] text-[var(--text-secondary)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {frontMatter.demo && (
                  <a
                    href={frontMatter.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-6 rounded-lg transition-all duration-200 hover:opacity-70 border border-[var(--border-color)] text-[var(--text-primary)]"
                  >
                    <FaExternalLinkAlt size={24} className="text-[var(--text-primary)]" />
                    <span className="text-xl font-medium">Live Demo</span>
                  </a>
                )}
                {frontMatter.github && (
                  <a
                    href={frontMatter.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-6 rounded-lg transition-all duration-200 hover:opacity-70 border border-[var(--border-color)] text-[var(--text-primary)]"
                  >
                    <FaGithub size={24} className="text-[var(--text-primary)]" />
                    <span className="text-xl font-medium">View Code</span>
                  </a>
                )}
              </div>
            </div>

            {/* Project content */}
            <div
              className="prose prose-lg max-w-none text-[var(--text-primary)]"
              style={{
                '--tw-prose-headings': 'var(--text-primary)',
                '--tw-prose-body': 'var(--text-secondary)',
                '--tw-prose-links': 'var(--accent-color)',
                '--tw-prose-code': 'var(--text-primary)',
                '--tw-prose-pre-bg': 'var(--bg-secondary)',
                '--tw-prose-blockquote-border': 'var(--border-color)'
              }}
            >
              <MDXRemote {...mdxSource} />
            </div>
          </div>
        </div>
      </section>
      <NavbarSimple />
    </>
  );
}
