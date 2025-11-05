import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="section" data-aos="fade-right">
      <div className="section-inner glass">
        <h2>Contact</h2>
        <p>If you'd like to discuss a role or a project — reach out!</p>
        <div className="contact-grid">
          <div className="contact-card">
            <strong>Email</strong>
            <a href="mailto:ganeshgiddaluru4@gmail.com">
              ganeshgiddaluru4@gmail.com
            </a>
          </div>
          <div className="contact-card">
            <strong>Phone</strong>
            <span>+91 9390441306</span>
          </div>
          <div className="contact-card">
            <strong>GitHub</strong>
            <a
              href="https://github.com/veerakishoregiddaluru"
              target="_blank"
              rel="noreferrer"
            >
              github.com/veerakishoregiddaluru
            </a>
          </div>
          <div className="contact-card">
            <strong>LinkedIn</strong>
            <a
              href="https://www.linkedin.com/in/veerakishoregiddaluru/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/veerakishoregiddaluru
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
