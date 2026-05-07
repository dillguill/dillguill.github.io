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
      <main style={{ position: 'relative', zIndex: 10 }}>
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
      </main>
      <NavbarSimple />
    </>
  );
}
