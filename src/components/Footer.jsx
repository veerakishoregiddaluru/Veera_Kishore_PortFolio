import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        © {new Date().getFullYear()} Veera Kishore — Built with React
      </div>
    </footer>
  );
}
