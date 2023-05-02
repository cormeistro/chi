import styles from "./ChimePage.module.css";
import HeroSection from "./sections/HeroSection";

const ChimePage = () => {
  return (
    <div className={styles.chimePage}>
      <HeroSection />
    </div>
  );
};

export default ChimePage;
