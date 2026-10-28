
import { Link } from "react-router";
import Navbar from "../components/Navbar";


const projects = [
  {
    title: "SokoSwift Mobile App",
    description:
      "A mobile shopping application with products loaded from Supabase, a shopping cart, quantity controls, and checkout development in progress.",
    technologies: ["React Native", "Expo", "Supabase"],
    status: "In progress",
    number: "01",
    github: "https://github.com/libaxqaran-bit/sokoswift",
    demo: "",
  },
  {
    title: "Student Management System",
    description:
      "A Django web application project focused on organizing student records and learning web development with Python.",
    technologies: ["Python", "Django", "SQLite"],
    status: "In progress",
    number: "02",
    github: "https://github.com/libaxqaran-bit/student-records-django",
    demo: "",
  },
  {
    title: "Personal Portfolio",
    description:
      "A responsive portfolio website showcasing my skills, projects, and development journey.",
    technologies: ["React", "TypeScript", "CSS"],
    status: "In progress",
    number: "03",
    github: "https://github.com/libaxqaran-bit/my-react-router-app",
    demo: "",
  },
];


export default function Projects() {
  return (
    <>
      <Navbar />

      <main className="projects-page">
        <section className="projects-heading">
          <p className="hero-eyebrow">MY WORK</p>

          <h1>
            Projects I've <span>Been Building.</span>
          </h1>

          <p>
            Here are some projects from my development journey.
            Each one helps me practice new skills and solve problems.
          </p>
        </section>

        <section className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-card-top">
                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-status">
                  {project.status}
                </span>
              </div>

              <h2>{project.title}</h2>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              
<div className="project-actions">
  {project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noreferrer"
      className="project-action"
    >
      GitHub ↗
    </a>
  )}

  {project.demo && (
    <a
      href={project.demo}
      target="_blank"
      rel="noreferrer"
      className="project-action"
    >
      Live Demo ↗
    </a>
  )}

  <Link to="/contact" className="project-action">
    Contact Me →
  </Link>
</div>
            </article>
          ))}
        </section>

        <section className="projects-cta">
          <h2>Have an idea for a project?</h2>
          <p>Let's connect and talk about building something useful.</p>

          <Link to="/contact" className="hero-button primary">
            Contact Me
          </Link>
        </section>
      </main>
    </>
  );
}