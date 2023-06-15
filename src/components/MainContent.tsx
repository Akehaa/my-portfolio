import { About } from "./MainContent/About";
import { Projects } from "./MainContent/Projects";

export function MainContent() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-200 via-white to-gray-200">
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </section>
  )
}