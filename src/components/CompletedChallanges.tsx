import { useContext } from "react";
import { ChallangesContext } from "../context/ChallangesContext";
import styles from "../styles/components/CompletedChallanges.module.css";
export function CompletedChallanges() {
  const { challangesCompleted } = useContext(ChallangesContext);
  return (
    <div className={styles.completedchallangescontainer}>
      <span>Completed Challanges</span>
      <span>{challangesCompleted}</span>
    </div>
  );
}
