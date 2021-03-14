import { useContext } from "react";
import { ChallangesContext } from "../context/ChallangesContext";
import { CountdownContext } from "../context/CountdownContext";
import styles from "../styles/components/ChallangeBox.module.css";
//'teste'
export function ChallangeBox() {
  const { activeChallange, resetChallange, completeChallange } = useContext(
    ChallangesContext
  );
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallangeSucceeded() {
    completeChallange();
    resetCountdown();
  }

  function hadleChallangeFailed() {
    resetChallange();
    resetCountdown();
  }
  return (
    <div className={styles.challangeBoxContainer}>
      {activeChallange ? (
        <div className={styles.challangeActive}>
          <header>Wind {activeChallange.amount} xp</header>
          <main>
            <img src={`icons/${activeChallange.type}.svg`} alt="" />
            <strong>New Challange</strong>
            <p>{activeChallange.description}</p>
          </main>
          <footer>
            <button
              type="button"
              className={styles.challangeFailedButton}
              onClick={hadleChallangeFailed}
            >
              Failed :(
            </button>
            <button
              type="button"
              className={styles.challangeSucceededButton}
              onClick={handleChallangeSucceeded}
            >
              Completed!
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challangeNotActive}>
          <strong>When the timer has finished you will get a challange! </strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Level up completting the challanges!
          </p>
        </div>
      )}
    </div>
  );
}
