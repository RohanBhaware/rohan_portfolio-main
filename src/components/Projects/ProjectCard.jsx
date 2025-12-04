import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
        />
        <div className={styles.imageOverlay}>
          <span>View project</span>
        </div>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <ul className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <li key={id} className={styles.skill}>
                {skill}
              </li>
            );
          })}
        </ul>

        <div className={styles.links}>
          {demo && (
            <a href={demo} className={styles.linkPrimary} target="_blank" rel="noreferrer">
              Demo
            </a>
          )}
          {source && (
            <a href={source} className={styles.linkSecondary} target="_blank" rel="noreferrer">
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
