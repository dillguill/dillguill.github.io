export default function Home() {
  return (
    <div>
      <section id="home" className="min-h-screen flex items-center justify-center">
        <h1 className="text-8xl uppercase">
          welcome
        </h1>
        <p className="mt-4 text-lg">
          Lorem ipsum odor amet, consectetuer adipiscing elit...
        </p>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center">
        <h2 className="text-4xl font-bold">About Me</h2>
        <p className="mt-4 text-lg">
          Details about your background and skills.
        </p>
      </section>

      <section id="projects" className="min-h-screen flex items-center justify-center">
        <h2 className="text-4xl font-bold">Projects</h2>
        <p className="mt-4 text-lg">
          Information about your GitHub projects.
        </p>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center">
        <h2 className="text-4xl font-bold">Contact</h2>
        <p className="mt-4 text-lg">
          Your contact details.
        </p>
      </section>
    </div>
  );
}