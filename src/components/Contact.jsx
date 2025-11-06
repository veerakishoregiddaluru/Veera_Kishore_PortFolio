import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const sendEmail = (e) => {
    e.preventDefault();

    // 1) Send message to YOU
    emailjs
      .send(
        "service_76eikce", // Your Service ID
        "template_pse4g0j", // Template for you
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
        },
        "lEFQl2_roO8GJQhYn" // Public Key
      )
      .then(() => {
        // 2) Send AUTO-REPLY to sender
        emailjs.send(
          "service_76eikce", // Same service
          "template_s8uy7me", // Auto reply template
          {
            to_name: form.name,
            to_email: form.email, // This sends to user
            user_message: form.message,
          },
          "lEFQl2_roO8GJQhYn"
        );

        toast.success("✅ Message sent & auto-reply delivered!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        toast.error("❌ Failed to send message. Try again.");
      });
  };

  return (
    <section id="contact" className="section" data-aos="fade-up">
      <div className="section-inner">
        <h2 data-aos="zoom-in">Contact Me</h2>

        <div className="contact-layout">
          {/* LEFT SIDE CONTACT DETAILS */}
          <div className="contact-info" data-aos="fade-right">
            <p>
              <strong>Email:</strong>
              <br />
              <a href="mailto:ganeshgiddaluru4@gmail.com">
                ganeshgiddaluru4@gmail.com
              </a>
            </p>

            <p>
              <strong>Phone:</strong>
              <br />
              +91 9390441306
            </p>

            <div className="social-icons">
              <a
                href="https://github.com/veerakishoregiddaluru"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/veerakishoregiddaluru/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.instagram.com/kishore_giddaluru/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>

              <a href="mailto:ganeshgiddaluru4@gmail.com">
                <FaEnvelope />
              </a>
            </div>

            <a
              href="/resume.pdf"
              download="Veera_Kishore_Resume.pdf"
              className="btn neon glow-btn"
            >
              Download Resume
            </a>
          </div>

          {/* RIGHT SIDE FORM */}
          <form
            className="contact-form"
            onSubmit={sendEmail}
            data-aos="fade-left"
          >
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

            <button type="submit" className="btn neon submit-btn glow-btn">
              Send Message 🚀
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
