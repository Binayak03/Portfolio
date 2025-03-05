import React from 'react';
import styles from './Education.module.css';

function Education({ref}) {
  return (
    <section className={styles.education} style={{ animationDelay: '0.6s' }} ref={ref}>
      <h2 className={styles.title}>Education</h2>
      <div className={styles.eduItem}>
        <h3 className={styles.subTitle}>Undergraduate</h3>
        <p className={styles.detail}>Kathmandu Bernhardt College</p>
        <p className={styles.detail}>BSc. CSIT</p>
      </div>
      <div className={styles.eduItem}>
        <h3 className={styles.subTitle}>High School</h3>
        <p className={styles.detail}>Kathmandu Model College</p>
      </div>
    </section>
  );
}

export default Education;