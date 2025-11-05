import React from "react";

function ProjectCard({ title, desc, tags, link }) {
  return (
    <a
      className="project-card glass"
      href={link || "#"}
      target="_blank"
      rel="noreferrer"
    >
      <div className="proj-top">
        <h3>{title}</h3>
      </div>
      <p>{desc}</p>
      <div className="proj-tags">
        {tags.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
    </a>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "SalesSavvy CRM",
      desc: "CRM built using Spring Boot, React and MySQL. Improved data efficiency and UI responsiveness.",
      tags: ["Spring Boot", "React", "MySQL"],
      link: "#",
    },
    // Add more project objects here
  ];

  return (
    <section id="projects" className="section" data-aos="fade-left">
      <div className="section-inner">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
