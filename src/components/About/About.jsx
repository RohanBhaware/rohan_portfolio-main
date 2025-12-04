import React from "react";
import styles from "./About.module.css";

const ROLES = [
  {
    title: "Frontend Developer",
    desc: "Creating responsive, accessible and beautiful UI using React & modern CSS.",
  },
  {
    title: "Backend Developer",
    desc: "Building fast, secure and scalable APIs with NodeJS & databases.",
  },
  {
    title: "UI/UX Designer",
    desc: "Designing clean, user-focused interfaces and design systems.",
  },
];

const SKILLS = [
  { name: "React", level: 70 },
  { name: "JavaScript", level: 80 },
  { name: "NodeJS", level: 40 },
  { name: "CSS / Tailwind", level: 70 },
  { name: "MongoDB / SQL", level: 50 },
];

export const About = () => {
  return (
    <section className={styles.container} id="about">  
      <h2 className={styles.title}>About Me</h2>

      <div className={styles.row}>
        {/* LEFT SIDE TEXT */}
        <div className={styles.left}>
          <p className={styles.lead}>
            I'm Rohan — a passionate full-stack developer who loves building
            elegant, performance-focused web applications. I enjoy turning ideas
            into functional, impactful digital experiences.
          </p>

          <ul className={styles.roles}>
            {ROLES.map((r, i) => (
              <li
                key={r.title}
                className={styles.roleCard}
                style={{ ["--delay"]: `${i * 120}ms` }}
              >
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE SKILLS */}
        <div className={styles.right}>
          <h3 className={styles.skillsTitle}>Skills</h3>

          <div className={styles.skillsList}>
            {SKILLS.map((s) => (
              <div key={s.name} className={styles.skillItem}>
                <div className={styles.skillHeader}>
                  <span className={styles.skillName}>{s.name}</span>
                  <span className={styles.skillPercent}>{s.level}%</span>
                </div>

                <div className={styles.skillBar}>
                  <div
                    className={styles.skillFill}
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
