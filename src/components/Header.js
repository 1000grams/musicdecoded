import { Link } from "react-router-dom";
// ...other imports

// Inside your Header component's return:
      <nav className="flex gap-6">
        <Link to="/dashboard">Artist Dashboard</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
import decodedMusicLogo from "../assets/decoded-music-logo.png";
import React, { useState } from 'react';
import styles from '../styles/Header.module.css';
import Button from './Button';
import content from '../content/landingPage.json'; // Import content

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="/" onClick={handleNavLinkClick}>
            <img src={decodedMusicLogo} alt="Decoded Music Logo" className="h-10 w-auto" />
          </a>
        </div>
      <nav className="flex gap-6">
        <Link to="/dashboard">Artist Dashboard</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
        <button className={styles.burgerMenu} onClick={toggleMobileMenu} aria-label="Toggle navigation menu">
          {/* Replace with burger icon SVG/image */}
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>
    </header>
  );
}

export default Header;
