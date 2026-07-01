import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Header from '../../src/components/Header';
import { NavbarSimple } from '../../src/components/Navbar';
import Link from 'next/link';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { getFeaturedRepos, getRepoReadme } from '../../lib/github';

export async function getStaticPaths() {
  const repos = await getFeaturedRepos();
  const paths = repos.map(repo => ({ params: { id: repo.id } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const repos = await getFeaturedRepos();
  const frontMatter = repos.find(r => r.id === params.id);
  const markdown = await getRepoReadme(params.id);

  return {
    props: {
      frontMatter,
      markdown,
    },
  };
}

export default function ProjectDetail({ frontMatter, markdown }) {
  return (
    <>
      <Header />
      <main style={{ position: 'relative', zIndex: 10 }}>
        <section className="py-12 min-h-screen pt-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 mb-8 hover:opacity-70 transition-opacity text-[var(--text-primary)]"
              >
                <FaArrowLeft size={16} />
                Back to Projects
              </Link>

              <div className="flex gap-4 mb-8">
                {frontMatter?.github && (
                  <a
                    href={frontMatter.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:opacity-70 transition-opacity text-[var(--text-primary)]"
                  >
                    <FaGithub size={18} />
                    GitHub
                  </a>
                )}
                {frontMatter?.live && (
                  <a
                    href={frontMatter.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:opacity-70 transition-opacity text-[var(--text-primary)]"
                  >
                    <FaExternalLinkAlt size={16} />
                    Live
                  </a>
                )}
              </div>

              <div
                className="prose prose-lg max-w-none text-[var(--text-primary)]"
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
            </div>
          </div>
        </section>
      </main>
      <NavbarSimple />
    </>
  );
}
