import { useContext } from "react";
import { ChallangesContext } from "../context/ChallangesContext";
import styles from "../styles/components/ExperienceBar.module.css";

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallangesContext
  );
  const percentToNextLevel = Math.round(
    (currentExperience / experienceToNextLevel) * 100
  );
  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div
          className={styles.currentExperienceBar}
          style={{ width: `${percentToNextLevel}%` }}
        />
        <span
          className={styles.currentExperience}
          style={{ left: `${percentToNextLevel}%` }}
        >
          {currentExperience}xp
        </span>
      </div>
      <span>{experienceToNextLevel}</span>
    </header>
  );
}
