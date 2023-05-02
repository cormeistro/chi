import styles from "./ServiceBlob.module.css";
import { ReactElement, useState } from "react";

interface Blob {
  title: string;
  text: string;
  icon: ReactElement;
}

const ServiceBlob = ({ title, text, icon }: Blob) => {
  const [showMore, setShowMore] = useState(false);

  function formatText() {
    const newText = text.slice(0, 250);
    if (text.length > 250 && !showMore)
      return (
        <>
          {newText}
          {"... "}
          <span onClick={() => setShowMore(!showMore)}>Read more</span>
        </>
      );
    else if (showMore) {
      return (
        <>
          {text} <span onClick={() => setShowMore(!showMore)}>Show less</span>
        </>
      );
    } else return text;
  }

  return (
    <div
      className={`${styles.serviceBlob} animation `}
      style={{ transform: "translateY(50%)" }}
    >
      <div className={styles.title}>
        <div className={`${styles.icon} icon`}>{icon}</div>
        <h2>{title}</h2>
      </div>
      <p>{formatText()}</p>
    </div>
  );
};

export default ServiceBlob;
