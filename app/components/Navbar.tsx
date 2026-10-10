import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        MyPortfolio
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
