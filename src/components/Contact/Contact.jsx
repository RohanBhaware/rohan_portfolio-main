import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Let's Connect</h2>
        <p className={styles.subtitle}>
          Have a project, idea or opportunity? Feel free to reach out.
        </p>
      </div>

      <ul className={styles.links}>
        <li className={styles.linkItem}>
          <div className={styles.iconWrapper}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          </div>
          <a href="bhawarerohan24@gmail.com">
            bhawarerohan24@gmail.com
          </a>
        </li>

        <li className={styles.linkItem}>
          <div className={styles.iconWrapper}>
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
            />
          </div>
          <a href="https://www.linkedin.com/in/rohan-bhaware-b0751a259/" target="_blank">
            linkedin.com/rohan-bhaware
          </a>
        </li>

        <li className={styles.linkItem}>
          <div className={styles.iconWrapper}>
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="Github icon"
            />
          </div>
          <a href="https://github.com/RohanBhaware" target="_blank">
            github.com/rohan-bhaware
          </a>
        </li>
      </ul>

      <p className={styles.copy}>© 2025 Rohan. All Rights Reserved.</p>
    </footer>
  );
};
