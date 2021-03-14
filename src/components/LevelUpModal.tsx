import { useContext } from "react";
import { ChallangesContext } from "../context/ChallangesContext";
import styles from "../styles/components/LevelUpModal.module.css";

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallangesContext);
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>2</header>
        <strong>Congrats!</strong>
        <p>You got a new level!</p>
        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar Modal" />
        </button>
      </div>
    </div>
  );
}
