import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer-horizontal-list">
        <div className="copyright">
          © 2024 Arjun S Menon
        </div>
        <a href="mailto:arjun.smenon.95@gmail.com" className="contact-link">
          arjun.smenon.95@gmail.com
        </a>
      </nav>
      <ul className="footer-ul">
        <li><a href="/">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </footer>
  )
}

export default Footer;