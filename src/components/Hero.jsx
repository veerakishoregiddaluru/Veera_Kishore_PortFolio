import React, { useEffect, useState } from "react";
import profile from "../assets/profile.jpg";

const roles = [
  "Java Full Stack Developer",
  "React.js Developer",
  "Spring Boot Developer",
  "MySQL | MongoDB",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const current = roles[i];

      if (!reverse) {
        setText(current.slice(0, j + 1));
        setJ(j + 1);
        if (j === current.length) setTimeout(() => setReverse(true), 1000);
      } else {
        setText(current.slice(0, j - 1));
        setJ(j - 1);
        if (j === 0) {
          setReverse(false);
          setI((i + 1) % roles.length);
        }
      }
    }, 80);

    return () => clearInterval(interval);
  }, [j, reverse, i]);

  return (
    <section className="hero" id="home" data-aos="fade-in">
      <div className="hero-inner glass">
        <img src={profile} alt="profile" className="profile-img" />

        <h1 className="hero-title">
          Hi, I'm <span className="name">Veera Kishore</span>
        </h1>

        <p className="hero-sub">
          <span className="typewriter">{text}</span>
          <span className="cursor">|</span>
        </p>

        <p className="hero-desc">
          Passionate about building scalable backend systems and poblished
          frontend interfaces.
        </p>

        <div className="hero-cta">
          <a className="btn neon" href="#projects">
            View Projects
          </a>
          <a
            className="btn outline"
            href="https://github.com/veerakishoregiddaluru"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
