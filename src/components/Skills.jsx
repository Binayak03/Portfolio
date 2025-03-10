import React from 'react';
import styles from './Skills.module.css';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaJava, FaPython, FaNetworkWired } from 'react-icons/fa';
// import { GiHacking } from 'react-icons/gi';

function Skills({ref}) {
  const skills = [
    { name: 'React', icon: <FaReact /> },
    // { name: 'HTML', icon: <FaHtml5 /> },
    // { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'Network Penetration', icon: <FaNetworkWired /> },
    // { name: 'Vulnerability Testing', icon: <GiHacking /> },
  ];

  return (
    <section className={styles.skills} style={{ animationDelay: '0.4s' }} ref={ref}>
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillItem}>
            {skill.icon}
            <p className={styles.skillName}>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;