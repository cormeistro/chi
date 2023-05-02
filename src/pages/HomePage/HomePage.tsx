import styles from "./HomePage.module.css";
import StatsSection from "./sections/StatsSection";
import HeroSection from "./sections/HeroSection";
import ServicesSection from "./sections/ServicesSection";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <HeroSection />
      <ServicesSection />
      <StatsSection />
    </div>
  );
};

export default HomePage;
