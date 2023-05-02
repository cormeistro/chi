import styles from "./HeroSection.module.css";
import ChimePDF from "./files/CHiME_SellSheets.pdf";

const HeroSection = () => {
  return (
    <section className={`${styles.heroSection} section-pad100`}>
      <h1>Introducing CHiME:</h1>
      <h2>Charter House Innovations Marketing Experience</h2>
      <iframe src="https://player.vimeo.com/video/662067826?h=8195962843&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" />
      <p>
        CHiME is an innovative suite of infrared products reimagining the dining
        experience—and redefining exceptional customer service.
      </p>
      <p>
        Utilizing our proprietary technologies, the CHiME suite makes the dining
        experience better for guests, team members, and management, from
        check-in and ordering to delivery and marketing messaging.
      </p>
      <p>
        Each technology may be used alone or together to create the ultimate
        customer service experience.
      </p>
      <a className="btn btn-primary" href={ChimePDF} download>
        Download Product Lit
      </a>
    </section>
  );
};

export default HeroSection;
