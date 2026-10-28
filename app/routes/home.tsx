import { Link } from "react-router";
import type { Route } from "./+types/home";
import Navbar from "../components/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ahmed mohamed| Developer Portfolio" },
    {
      name: "description",
      content:
        "Welcome to my developer portfolio. Explore my skills, projects, and journey in web development.",
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
  Hi, I'm <span>AHMED MOHAMED.</span>
  <br />
  <span>Developer in Progress.</span>
</h1>

          <p className="hero-description">
            I'm passionate about technology and building useful
            digital experiences. I'm currently developing my skills
            in <span>
              HTML, CSS, JavaScript, React, and Python
            </span>.
            Explore my projects and follow my journey as I grow
            into a professional developer.
          </p>

          <div className="hero-actions">
            <Link to="/projects" className="hero-button primary">
              View My Projects
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

            <p>
              <span className="code-purple">const</span> developer = {"{"}
            </p>

            <p className="code-indent">
              name: <span className="code-green">"AHMED MOHAMED"</span>,
            </p>

            <p className="code-indent">
              learning: <span className="code-green">true</span>,
            </p>

            <p className="code-indent">
              building: <span className="code-green">"Web Apps"</span>,
            </p>

            <p className="code-indent">
              goal: <span className="code-green">"Keep Growing"</span>
            </p>

            <p>{"};"}</p>

            <p className="code-comment">
              // Learn. Build. Improve. Repeat.
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