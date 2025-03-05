import React from 'react';
import styles from './Contact.module.css';
import { FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Contact({ref}) {
  return (
    <section className={styles.contact} style={{ animationDelay: '0.8s' }} ref={ref}>
      <h2 className={styles.title}>Contact Me</h2>
      <div className={styles.contactLinks}>
        <a href="mailto:binayakbhattarai268@gmail.com" className={styles.link}>
          <FaEnvelope /> binayakbhattarai268@gmail.com
        </a>
        <a href="https://www.linkedin.com/in/binayak-bhattarai-152735266/" target="_blank" rel="noopener noreferrer" className={styles.link}>
          <FaLinkedin /> LinkedIn
        </a>
        <a href="https://www.instagram.com/binayak_bhattarai/" target="_blank" rel="noopener noreferrer" className={styles.link}>
          <FaInstagram /> Instagram
        </a>
      </div>
    </section>
  );
}

export default Contact;