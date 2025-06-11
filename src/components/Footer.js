import React from 'react';
import styles from '../styles/Footer.module.css';
import content from '../content/landingPage.json'; // Import content
// Assuming you use react-icons or similar, import them here
// Example imports:
// import { FaFacebookF, FaSpotify, FaYoutube, FaDiscord } from 'react-icons/fa';
import Icon from './Icon'; // Use placeholder icon component

function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightText = content.footer.copyright.replace('{year}', currentYear);

  // Map icon names from JSON to actual component/SVG if using a library
  const socialIconsMap = {
    facebook: 'facebook', // Placeholder name
    spotify: 'spotify', // Placeholder name
    youtube: 'youtube', // Placeholder name
    discord: 'discord', // Placeholder name
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brandInfo}>
          <div className={styles.logo}>
            {/* Replace with your actual logo image or SVG */}
            {content.footer.logoText}
          </div>
          <p className={styles.copyright}>{copyrightText}</p>
           {/* Added privacy note below copyright or near privacy link */}
           {content.footer.privacyNote && <p className={styles.privacyNote}>{content.footer.privacyNote}</p>}
        </div>
        <div className={styles.links}>
          <h4>{content.footer.quickLinksTitle}</h4>
          <ul>
            {content.footer.quickLinks.map((link, index) => (
              <li key={index}><a href={link.href}>{link.text}</a></li>
            ))}
          </ul>
        </div>
        <div className={styles.social}>
          <h4>{content.footer.socialLinksTitle}</h4>
          <div className={styles.socialIcons}>
            {content.footer.socialLinks.map((social, index) => (
               <a key={index} href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                  {/* Replace with actual icon component from library */}
                  <Icon name={socialIconsMap[social.icon]} size="24px" color="var(--text-color)" /> {/* Use text color for icons */}
               </a>
            ))}
          </div>
        </div>
        {/* Optional BUZZ Signup (commented out in JSON and here) */}
      </div>
    </footer>
  );
}

export default Footer;