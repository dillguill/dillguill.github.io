import LogoCloud from "./components/LogoCloud";
import Contact from "./components/Contact";
import About from "./components/About";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div>
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center text-center p-4"
      >
        <h1 className="text-6xl md:text-8xl font-bold uppercase mb-4">
          welcome
        </h1>
        <p className="text-md md:text-lg">
          Lorem ipsum odor amet, consectetuer adipiscing elit...
        </p>
      </section>

      <section>
        <LogoCloud />
      </section>

      <section>
        <About />
      </section>

      <section>
        <Projects />
      </section>

      <section>
        <Contact />
      </section>
    </div>
  );
}
