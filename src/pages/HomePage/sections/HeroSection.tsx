import styles from "./HeroSection.module.css";
import { linkedInURL, facebookURL, instagramURL } from "../../../Links";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const HeroSection = () => {
  return (
    <section className={`${styles.heroSection} section-pad50`}>
      <div
        className={`${styles.wrapper} animation`}
        style={{ transform: "translateX(-10%)" }}
      >
        <p className={styles.slogan}>
          At <span>Charter House Innovations</span>,
          <br />
          we design, manufacture, and deliver custom seating and décor.
        </p>
        <div className={styles.bottomRow}>
          <div className="btn btn-primary">Let's Chat</div>
          <div className={styles.socialLinks}>
            <a href={facebookURL} target="_blank" rel="noreferrer">
              <div className={`${styles.icon} icon`}>
                <BsFacebook />
              </div>
            </a>
            <a href={instagramURL} target="_blank" rel="noreferrer">
              <div className={`${styles.icon} icon`}>
                <BsInstagram />
              </div>
            </a>
            <a href={linkedInURL} target="_blank" rel="noreferrer">
              <div className={`${styles.icon} icon`}>
                <BsLinkedin />
              </div>
            </a>
          </div>
        </div>
      </div>
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
