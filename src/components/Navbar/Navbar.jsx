import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        <span className={styles.logoDot} />
        <span>Rohan</span>
        <span className={styles.logoTag}>Portfolio</span>
      </a>

      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />

        <ul
          className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about" className={styles.navLink}>
              About
            </a>
          </li>
          <li>
            <a href="#experience" className={styles.navLink}>
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className={styles.navLink}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className={styles.navLinkAccent}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
