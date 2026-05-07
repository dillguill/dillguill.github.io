import Header from '../../src/components/Header';
import Projects from '../../src/components/Projects';
import { NavbarSimple } from '../../src/components/Navbar';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projectsDirectory = path.join(process.cwd(), 'src/projects');

export async function getStaticProps() {
  const filenames = fs.readdirSync(projectsDirectory);
  const mdxFiles = filenames.filter(file => file.endsWith('.mdx')).sort();

  const projectsData = mdxFiles.map(file => {
    const fullPath = path.join(projectsDirectory, file);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    const id = file.replace('.mdx', '');

    return {
      id,
      ...data,
    };
  });

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
