import { useEffect } from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Header from '../src/components/Header';
import Home from '../src/components/Home';
import { NavbarSimple } from '../src/components/Navbar';

const projectsDirectory = path.join(process.cwd(), 'src/projects');

export async function getStaticProps() {
  const filenames = fs.readdirSync(projectsDirectory);
  const mdxFiles = filenames.filter(file => file.endsWith('.mdx'));

  const projectsData = mdxFiles.map(file => {
    const fullPath = path.join(projectsDirectory, file);
    const stats = fs.statSync(fullPath);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    const id = file.replace('.mdx', '');

    return {
      id,
      ...data,
      lastModified: stats.mtime.getTime(),
    };
  });

  projectsData.sort((a, b) => b.lastModified - a.lastModified);

  return {
    props: {
      projectsData,
    },
  };
}

export default function Index({ projectsData }) {
  useEffect(() => {
    const sh = document.getElementById('sh');
    const tickItems = document.querySelectorAll('.tick-item');
    
    if (!sh || tickItems.length === 0) return;

    const sectionHeight = window.innerHeight - 44;

    tickItems.forEach((t) => {
      t.addEventListener('click', () => {
        sh.scrollTo({
          top: parseInt(t.dataset.sec) * sectionHeight,
          behavior: 'smooth'
        });
      });
    });

    const handleScroll = () => {
      const idx = Math.round(sh.scrollTop / sectionHeight);
      tickItems.forEach((t, i) => {
        t.classList.toggle('act', i === idx);
      });
    };

    sh.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      sh.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <Home projectsData={projectsData} />
      <NavbarSimple />
    </>
  );
}