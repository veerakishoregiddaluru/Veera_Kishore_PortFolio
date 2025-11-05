import React from "react";

const skills = [
  "Java",
  "Spring Boot",
  "React.js",
  "MySQL",
  "MongoDB",
  "Hibernate",
  "HTML",
  "CSS",
  "Git",
  "REST APIs",
];

export default function Skills() {
  return (
    <section id="skills" className="section" data-aos="zoom-in">
      <div className="section-inner">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((s) => (
            <div className="skill-badge" key={s}>
              <span>{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
