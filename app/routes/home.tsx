
import { Link } from "react-router";
import type { Route } from "./+types/home";
import Navbar from "../components/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "My Portfolio | Home" },
    {
      name: "description",
      content: "Explore my developer portfolio, skills, and projects.",
    },
  ];
}

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="hero">
        <div className="hero-content">
          <p className="hero-eyebrow">
            WELCOME TO MY PORTFOLIO
          </p>

          <h1>
            Hi, I'm a <span>Developer in Progress.</span>
          </h1>

          <p className="hero-description">
            I'm learning to build modern websites and useful
            applications with HTML, CSS, JavaScript, React,
            and Python. Explore my journey and the projects
            I'm building along the way.
          </p>

          <div className="hero-actions">
            <Link to="/projects" className="hero-button primary">
              Explore My Projects
            </Link>

            <Link to="/contact" className="hero-button secondary">
              Contact Me
            </Link>
          </div>

          <div className="hero-skills">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Python</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-circle"></div>

          <div className="code-card">
            <div className="code-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <p className="code-muted">developer.js</p>
            <p><span className="code-purple">const</span> developer = {"{"}</p>
            <p className="code-indent">
              name: <span className="code-green">"Creative"</span>,
            </p>
            <p className="code-indent">
              learning: <span className="code-green">true</span>,
            </p>
            <p className="code-indent">
              building: <span className="code-green">"Web Apps"</span>
            </p>
            <p>{"};"}</p>
            <p className="code-comment">
              // Always learning, always building.
            </p>
          </div>

          <div className="floating-badge">
            <span className="status-dot"></span>
            Learning. Building. Growing.
          </div>
        </div>
      </main>
    </>
  );
}