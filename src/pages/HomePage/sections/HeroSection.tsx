import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={`${styles.heroSection} section-pad50`}>
      <p
        className={`${styles.slogan} animation`}
        style={{ transform: "translateX(-10%)" }}
      >
        At <span>Charter House Innovations</span>, we design, manufacture, and
        deliver custom seating and décor.
      </p>
      <a
        className={styles.caption}
        href="https://goo.gl/maps/cwaQTeEwRc8AH77u8"
        target="_blank"
        rel="noreferrer"
      >
        (City Flats Hotel - Grand Rapids, MI)
      </a>
    </section>
  );
};

export default HeroSection;
