import React from 'react';
import styles from '../styles/Footer.module.css';
import content from '../content/landingPage.json';
import Icon from './Icon';
import decodedMusicLogo from '../assets/decoded-music-logo.png';

function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightText = content.footer.copyright.replace('{year}', currentYear);

  const socialIconsMap = {
    facebook: 'facebook',
    spotify: 'spotify',
    youtube: 'youtube',
    discord: 'discord',
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brandInfo}>
          <div className={styles.logo}>
            <img src={decodedMusicLogo} alt="Decoded Music Logo" className="h-10 w-auto" />
          </div>
          <p className={styles.copyright}>{copyrightText}</p>
          {content.footer.privacyNote && (
            <p className={styles.privacyNote}>{content.footer.privacyNote}</p>
          )}
        </div>
        <div className={styles.links}>
          <h4>{content.footer.quickLinksTitle}</h4>
          <ul>
            {content.footer.quickLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.social}>
          <h4>{content.footer.socialLinksTitle}</h4>
          <div className={styles.socialIcons}>
            {content.footer.socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name={socialIconsMap[social.icon]} size="24px" color="var(--text-color)" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
