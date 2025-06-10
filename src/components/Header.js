import React, { useState } from 'react';
import styles from '../styles/Header.module.css';
import Button from './Button';
import content from '../content/landingPage.json'; // Import content

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          {/* Replace with your actual logo image or SVG */}
          <a href="/">{content.header.logoText}</a>
        </div>
        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.mobileNavOpen : ''}`}>
          <ul>
            {content.header.navLinks.map((link, index) => (
              <li key={index}><a href={link.href}>{link.text}</a></li>
            ))}
          </ul>
          <div className={styles.authButtons}>
            <Button variant="outline" color="accent" href={content.header.signInButtonHref}>{content.header.signInButtonText}</Button>
            <Button variant="fill" color="accent" href={content.header.signUpButtonHref}>{content.header.signUpButtonText}</Button>
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