import Nav from "../components/Nav";
import Intro from "../components/Intro";
import Skills from "../components/Skills";
import About from "../components/About";
import Project from "../components/Project";
import Contact from "../components/Contact";

export default function Home() {
  return (
      <div className="flex flex-col">
        <Nav />

        <section id="home" className="scroll-mt-20">
          <Intro />
        </section>

        <section id="about" className="scroll-mt-20">
          <About />
        </section>

        <section id="skills" className="scroll-mt-20">
          <Skills />
        </section>

        <section id="projects" className="scroll-mt-20">
          <Project />
        </section>

        <section id="contact" className="scroll-mt-20">
          <Contact />
        </section>
      </div>
  );
}
