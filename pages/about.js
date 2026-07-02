import Header from '../src/components/Header';
import About from '../src/components/About';
import { NavbarSimple } from '../src/components/Navbar';
import { getRepoReadme } from '../lib/github';

export async function getStaticProps() {
  const readme = await getRepoReadme('dillguill');
  const markdown = readme.replace(/^(#[^\n]*\n+)\[[^\n]*\)[^\n]*\n+---\n+/, '$1');

  return {
    props: {
      markdown,
    },
  };
}

export default function AboutPage({ markdown }) {
  return (
    <>
      <Header />
      <main style={{ position: 'relative', zIndex: 10 }}>
        <About markdown={markdown} />
      </main>
      <NavbarSimple />
    </>
  );
}
