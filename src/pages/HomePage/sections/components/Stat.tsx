import styles from "./Stat.module.css";
import { formatNumberAsShortString } from "../../../../utils/NumberFormatter";
import { useEffect, useState } from "react";

interface Stat {
  endingNumber: number;
  startCount: boolean;
  text: string;
}

const Stat = ({ endingNumber, startCount, text }: Stat) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    if (currentNumber < endingNumber && startCount) {
      setTimeout(() => {
        setCurrentNumber(endingNumber / 50 + currentNumber);
      }, 50);
    } else if (startCount) setCurrentNumber(endingNumber);
  }, [currentNumber, startCount]);

  return (
    <div
      className={`${styles.stat} animation stat`}
      style={{ transform: "translateY(100%)" }}
    >
      <div className={styles.content}>
        <h1 className={styles.number}>
          {formatNumberAsShortString(currentNumber)}
        </h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Stat;
