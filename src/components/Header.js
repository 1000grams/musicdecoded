import { Link } from "react-router-dom";
// ...other imports

// Inside your Header component's return:
<nav className="flex gap-6">
  <Link to="/dashboard">Artist Dashboard</Link>
  <Link to="/about">About</Link>
  <Link to="/contact">Contact</Link>
</nav>
import decodedMusicLogo from "../assets/decoded-music-decoded-music-logo.png";
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
          {/* Replace with your actual logo image or SVG */}
          <a href="/" onClick={handleNavLinkClick}>{content.header.logoText}</a>
        </div>
        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.mobileNavOpen : ''}`}>
          <ul>
            {content.header.navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} onClick={handleNavLinkClick}>{link.text}</a>
              </li>
            ))}
          </ul>
          <div className={styles.authButtons}>
            <Button
              variant="outline"
              color="accent"
              href={content.header.signInButtonHref}
              onClick={handleNavLinkClick}
            >
              {content.header.signInButtonText}
            </Button>
            <Button
              variant="fill"
              color="accent"
              href={content.header.signUpButtonHref}
              onClick={handleNavLinkClick}
            >
              {content.header.signUpButtonText}
            </Button>
          </div>
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
