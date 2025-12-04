import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";

const PHRASES = [
  "Full-Stack Developer",
  "UI/UX • React • NodeJS",
  "I build user-friendly web applactions",
];

export const Hero = () => {
  // Typewriter state
  const [index, setIndex] = useState(0);
  const [subtext, setSubtext] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let charTimer, pauseTimer;
    const current = PHRASES[index];
    if (typing) {
      let i = 0;
      charTimer = setInterval(() => {
        i++;
        setSubtext(current.slice(0, i));
        if (i === current.length) {
          clearInterval(charTimer);
          pauseTimer = setTimeout(() => setTyping(false), 1000);
        }
      }, 50);
    } else {
      // deleting
      let i = current.length;
      charTimer = setInterval(() => {
        i--;
        setSubtext(current.slice(0, i));
        if (i === 0) {
          clearInterval(charTimer);
          setIndex((prev) => (prev + 1) % PHRASES.length);
          setTyping(true);
        }
      }, 28);
    }

    return () => {
      clearInterval(charTimer);
      clearTimeout(pauseTimer);
    };
  }, [index, typing]);

  return (
    <section className={styles.container}>
      {/* Floating decorative shapes */}
      <div className={styles.shape + " " + styles.shape1} aria-hidden="true" />
      <div className={styles.shape + " " + styles.shape2} aria-hidden="true" />
      <div className={styles.shape + " " + styles.shape3} aria-hidden="true" />

      <div className={styles.centerBox}>
        <div className={styles.card}>
          <h1 className={styles.title}>
            Hi, I'm <span className={styles.name}>Rohan</span>
            <span className={styles.cursor} aria-hidden="true">▍</span>
          </h1>

          <p className={styles.subtitle}>
            <span className={styles.typewriter}>{subtext}</span>
          </p>

          <p className={styles.description}>
            Passionate about building performant, accessible and beautiful web
            apps. I enjoy turning complex problems into delightful user
            interfaces.
          </p>

          <div className={styles.actions}>
            <a href="/resume/Rohan_Resume.pdf" download className={styles.ctaPrimary}>
              Download Resume
            </a>
            <a href="bhawarerohan24@email.com" className={styles.ctaGhost}>
              Contact Me
            </a>
          </div>

          <div className={styles.socials}>
            <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer">LinkedIn</a>
            {/* <a href="https://twitter.com/yourtwitter" target="_blank" rel="noreferrer">Twitter</a> */}
          </div>
        </div>
      </div>

      {/* colorful accents */}
      <div className={styles.topGlow} />
      <div className={styles.bottomGlow} />
    </section>
  );
};
