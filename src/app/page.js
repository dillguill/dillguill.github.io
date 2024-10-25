export default function Home() {
  return (
    <div>
      <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center p-4">
  <h1 className="text-6xl md:text-8xl font-bold uppercase mb-4">
    welcome
  </h1>
  <p className="text-md md:text-lg">
    Lorem ipsum odor amet, consectetuer adipiscing elit...
  </p>
</section>

<section id="about" className="min-h-screen flex flex-col items-center justify-center px-4 md:px-10">
  <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
  <p className="max-w-lg text-sm md:text-lg text-center">
    I&#39m a web developer with a passion for building beautiful, functional web applications.
    I have experience in front-end and back-end technologies, and I love working on exciting, dynamic projects.
  </p>
</section>

<section id="projects" className="min-h-screen flex flex-col items-center justify-center px-4 md:px-10">
  <h2 className="text-3xl md:text-4xl font-bold mb-6">Projects</h2>
  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
    <div className="p-6 shadow-lg rounded-lg">
      <h3 className="text-2xl font-semibold mb-3">Project 1</h3>
      <p className="">
        A brief description of the project, including the tech stack used and the challenges faced.
      </p>
      <a href="https://github.com/yourusername/project1" className="mt-2 block">View on GitHub</a>
      <a href="https://project1-demo.netlify.app" className="mt-1 block">Live Demo</a>
    </div>
    {/* More project cards here */}
  </div>
</section>

      <section
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center p-10"
      >
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-lg  mb-4">
          Feel free to reach out to me through any of the following methods:
        </p>
        <a
          href="mailto:your-email@example.com"
          className="text-lg mb-2"
        >
          Email: your-email@example.com
        </a>
        <a
          href="https://linkedin.com/in/yourprofile"
          className="text-lg mb-2"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/yourusername"
          className="text-lg mb-2"
        >
          GitHub
        </a>
      </section>
    </div>
  );
}
