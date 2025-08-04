import React, { useState } from "react";
import "./Hero.css";

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="hero-container">

      {/* Video Background */}
      <video autoPlay muted loop className="hero-video">
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Static Logo (top left) */}
      <img src="/logo.png" alt="Logo" className="hero-logo" />

      {/* Hamburger Icon (top right) - always visible */}
      <button className="menu-icon" onClick={() => setMenuOpen(true)}>☰</button>

      {/* Scroll Down Arrow */}
      <div className="scroll-down-indicator">↓</div>

      {/* Fullscreen Overlay Menu */}
      {menuOpen && (
        <div className="menu-overlay">
          <button className="close-btn" onClick={() => setMenuOpen(false)}>
            &times;
          </button>

          {/* Logo inside overlay */}
          <img src="/logo.png" alt="Logo" className="overlay-logo" />

          {/* Animated nav links */}
          <nav className="overlay-nav">
            <ul>
              <li style={{ animationDelay: "0.1s" }}><a href="#about">About</a></li>
              <li style={{ animationDelay: "0.2s" }}><a href="#services">Services</a></li>
              <li style={{ animationDelay: "0.3s" }}><a href="#menus">Menus</a></li>
              <li style={{ animationDelay: "0.4s" }}><a href="#portfolio">Portfolio</a></li>
              <li style={{ animationDelay: "0.5s" }}><a href="#testimonials">Testimonials</a></li>
              <li style={{ animationDelay: "0.6s" }}><a href="#partnerships">Partnerships</a></li>
              <li style={{ animationDelay: "0.7s" }}><a href="#events">Upcoming Events</a></li>
              <li style={{ animationDelay: "0.8s" }}><a href="#contact">Contact</a></li>
            </ul>
          </nav>

          {/* Divider line */}
          <div className="menu-divider"></div>

          {/* Social media icons */}
          <div className="socials">
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-tiktok"></i></a>
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;
