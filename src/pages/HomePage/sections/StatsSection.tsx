import { useEffect, useState } from "react";
import styles from "./StatsSection.module.css";
import Stat from "./components/Stat";

const StatsSection = () => {
  const [startCount, setStartCount] = useState(false);
  useEffect(() => {
    var stats = document.querySelectorAll(".stat");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animation-show");
          setStartCount(true);
        }
      });
    });

    stats.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className={`${styles.statsSection} section-pad200`}>
      <Stat
        startCount={startCount}
        endingNumber={402_000}
        text="sq ft production facilities"
      />
      <Stat
        startCount={startCount}
        endingNumber={1_500_000}
        text="products delivered"
      />
      <Stat
        startCount={startCount}
        endingNumber={1_375}
        text="satisfied customers"
      />
      <Stat startCount={startCount} endingNumber={826} text="team members" />
    </section>
  );
};

export default StatsSection;
