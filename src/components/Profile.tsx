import { useContext } from "react";
import { ChallangesContext } from "../context/ChallangesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallangesContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/thiago-cmont.png" alt="Thiago Correia" />
      <div>
        <strong>Thiago Correia</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
