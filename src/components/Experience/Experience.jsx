import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>

      <div className={styles.content}>

        {/* SLIDING SKILLS SECTION */}
        <div className={styles.slider}>
          <div className={styles.slideTrack}>
            {skills.concat(skills).map((skill, id) => (
              <div key={id} className={styles.slide}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
            ))}
          </div>
        </div>

        {/* HISTORY SECTION */}
        <ul className={styles.history}>
          {history.map((historyItem, id) => (
            <li key={id} className={styles.historyItem}>
              <img
                src={getImageUrl(historyItem.imageSrc)}
                alt={`${historyItem.organisation} Logo`}
              />

              <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>

                <ul>
                  {historyItem.experiences.map((experience, id) => (
                    <li key={id}>{experience}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
};
