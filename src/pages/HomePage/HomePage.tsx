import styles from "./HomePage.module.css";
import StatsSection from "./sections/StatsSection";
import HeroSection from "./sections/HeroSection";
import ServicesSection from "./sections/ServicesSection";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    const compElement = document.querySelector(".homePage");
    const animatedElements = compElement?.querySelectorAll(".animation");

    const homePageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("animation-show");
      });
    });

    animatedElements &&
      animatedElements.forEach((el) => homePageObserver.observe(el));
  });

  return (
    <div className={`${styles.homePage} homePage`}>
      <HeroSection />
      <ServicesSection />
      <StatsSection />
    </div>
  );
};

export default HomePage;
