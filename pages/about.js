import Header from '../src/components/Header';
import About from '../src/components/About';
import { NavbarSimple } from '../src/components/Navbar';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main style={{ position: 'relative', zIndex: 10 }}>
        <About />
      </main>
      <NavbarSimple />
    </>
  );
}
