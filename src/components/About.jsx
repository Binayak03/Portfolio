import React from 'react';
import styles from './About.module.css';

function About({ref}) {
  return (
    <section className={styles.about} style={{ animationDelay: '0.2s' }} ref={ref}>
      <h2 className={styles.title}>About Me</h2>
      <p className={styles.description}>
        Enthusiastic BSc. CSIT student with a keen interest in cybersecurity and AI. Eager to learn, grow, and apply theoretical knowledge to real-world challenges and gain hands-on experience in the tech industry. Looking for an internship that allows me to contribute, learn, and grow in a fast-paced, innovative environment.
      </p>
    </section>
  );
}

export default About;