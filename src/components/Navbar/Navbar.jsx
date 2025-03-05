import React from 'react';
import styles from './Navbar.module.css';
import { getImageUrl } from '../../utils';
import profilepic from '/assets/profile-pic.jpg';
export const Navbar = ({refCollection}) => {
  const [aboutRef, skillsRef, eduRef, contactRef] = refCollection
  return (
    <nav className={styles.navbar}>
      <div className={styles.profile}>
        <img src = {profilepic} alt="Binayak Bhattarai" className={styles.profilePic} />
        <div>
          <a className={styles.title} href="/">Binayak Bhattarai</a>
          <p className={styles.tagline}>BSc. CSIT Student | Cybersecurity & AI Enthusiast</p>
        </div>
      </div>
      <div className={styles.menu}>
        <img className={styles.menuBtn} src={getImageUrl('nav/menuIcon.png')} alt="menu-button" />
        <ul className={styles.menuItems}>
          <li>
            <a href="#About" onClick={() => {
              aboutRef.current.scrollIntoView({
                behavior: "smooth"
              });
            }}>About</a>
          </li>
          <li>
            <a href="#Skills" onClick={() => {
              skillsRef.current.scrollIntoView({
                behavior: "smooth"
              });
            }}>Skills</a> {/* Updated from "experience" to match new sections */}
          </li>
          <li>
            <a href="#Education" onClick={() => {
              eduRef.current.scrollIntoView({
                behavior: "smooth"
              });
            }}>Education</a>
          </li>
          <li>
            <a href="#Contact" onClick={() => {
              contactRef.current.scrollIntoView({
                behavior: "smooth"
              });
            }}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;