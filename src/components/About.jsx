import React from "react";

export default function About() {
  return (
    <section id="about" className="section" data-aos="fade-up">
      <div className="section-inner glass">
        <h2>About Me</h2>
        <p>
          I’m a collaborative, result-driven Java Full Stack Developer. Interned
          at KodNest Technologies, worked on SalesSavvy CRM using Spring Boot,
          React and MySQL. I focus on performance, clean code and user
          experience.
        </p>
        <ul className="mini-info">
          <li>
            <strong>Education:</strong> B.Tech — Chaitanya Bharathi Institute of
            Technology (CGPA 8.18)
          </li>
          <li>
            <strong>Cert:</strong> Java Full Stack Development — KodNest (Mar
            2025)
          </li>
          <li>
            <strong>Location:</strong> YSR Kadapa, India
          </li>
        </ul>
      </div>
    </section>
  );
}
