import { useEffect, useState } from "react";
import styles from "./StatsSection.module.css";
import Stat from "./components/Stat";

const StatsSection = () => {
  const [allowCount, setAllowCount] = useState(false);
  useEffect(() => {
    var stats = document.querySelectorAll(".stat");

    const statObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setAllowCount(true);
      });
    });

    stats.forEach((el) => statObserver.observe(el));
  }, []);

  return (
    <section className={`${styles.statsSection} section-pad200`}>
      <Stat
        allowCount={allowCount}
        endingNumber={402_000}
        text="sq ft production facilities"
      />
      <Stat
        allowCount={allowCount}
        endingNumber={1_500_000}
        text="products delivered"
      />
      <Stat
        allowCount={allowCount}
        endingNumber={1_375}
        text="satisfied customers"
      />
      <Stat allowCount={allowCount} endingNumber={826} text="team members" />
    </section>
  );
};

export default StatsSection;
