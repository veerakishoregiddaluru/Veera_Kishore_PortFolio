import React from "react";

export default function Navbar() {
  return (
    <header className="nav-wrap">
      <nav className="navbar">
        <div className="brand">
          <span className="neon-dot" /> Veera Kishore
        </div>
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
