import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_76eikce", // Your Service ID
        "template_pse4g0j", // Your Template ID
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
        },
        "lEFQl2_roO8GJQhYn" // Your Public Key
      )
      .then(() => {
        toast.success("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.log(err);
        toast.error("❌ Failed to send message. Try again.");
      });
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-inner">
          <h2>Contact Me</h2>

          <div className="contact-layout">
            {/* LEFT CONTACT INFO */}
            <div className="contact-info">
              <p>
                <strong>Email:</strong>
                <br />
                <a href="mailto:ganeshgiddaluru4@gmail.com">
                  ganeshgiddaluru4@gmail.com
                </a>
              </p>

              <p>
                <strong>Phone:</strong>
                <br /> +91 9390441306
              </p>

              <div className="social-icons">
                <a
                  href="https://github.com/veerakishoregiddaluru"
                  target="_blank"
                  rel="noreferrer"
                >
                  💻
                </a>

                <a
                  href="https://www.linkedin.com/in/veerakishoregiddaluru/"
                  target="_blank"
                  rel="noreferrer"
                >
                  🔗
                </a>

                <a href="#" target="_blank" rel="noreferrer">
                  📸
                </a>
              </div>

              <a href="/resume.pdf" download className="btn neon">
                Download CV
              </a>
            </div>

            {/* RIGHT FORM */}
            <form className="contact-form" onSubmit={sendEmail}>
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />

              <textarea
                placeholder="Your Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              ></textarea>

              <button type="submit" className="btn neon submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
