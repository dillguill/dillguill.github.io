import { useEffect } from 'react';
import Header from '../src/components/Header';
import Home from '../src/components/Home';
import { NavbarSimple } from '../src/components/Navbar';
import { getFeaturedRepos } from '../lib/github';

export async function getStaticProps() {
  const projectsData = await getFeaturedRepos();

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
