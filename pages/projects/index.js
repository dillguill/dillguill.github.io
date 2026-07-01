import Header from '../../src/components/Header';
import Projects from '../../src/components/Projects';
import { NavbarSimple } from '../../src/components/Navbar';
import { getFeaturedRepos } from '../../lib/github';

export async function getStaticProps() {
  const projectsData = await getFeaturedRepos();

  return {
    props: {
      projectsData,
    },
  };
}

export default function ProjectsPage({ projectsData }) {
  return (
    <>
      <Header />
      <main style={{ position: 'relative', zIndex: 10 }}>
        <Projects projectsData={projectsData} />
      </main>
      <NavbarSimple />
    </>
  );
}
