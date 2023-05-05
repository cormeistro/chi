import styles from "./Footer.module.css";
import { linkedInURL, facebookURL, instagramURL } from "../Links";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={`${styles.footer} section-pad100`}>
      <div className={styles.column}>
        <h1>Charter House Innovations</h1>
        <p>200 N Franklin St, Zeeland, MI 49464</p>
        <p>
          Main: <a href="tel:8003147659">(800) 314-7659</a>
        </p>
        <p>
          Fax: <a href="tel:6163998396">(616) 399-8396</a>
        </p>
        <br />

        <div className={styles.socials}>
          <a href={facebookURL} target="_blank" rel="noreferrer">
            <div className="icon">
              <BsFacebook />
            </div>
          </a>
          <a href={instagramURL} target="_blank" rel="noreferrer">
            <div className="icon">
              <BsInstagram />
            </div>
          </a>
          <a href={linkedInURL} target="_blank" rel="noreferrer">
            <div className="icon">
              <BsLinkedin />
            </div>
          </a>
        </div>

        <br />
        <p>&copy; 2023 Charter House Innovations</p>
      </div>
      <div className={styles.column}>
        <h2>Contact Us</h2>
        <h3>Customer Service</h3>
        <p>
          Email:{" "}
          <a href="mailto:customerservice@charter-house.com">
            customerservice@charter-house.com
          </a>
        </p>
        <p>
          Phone: <a href="tel:6163996000">(616) 399-6000</a>
        </p>
        <br />
        <h3>Human Resources</h3>
        <p>
          Email:{" "}
          <a href="mailto:robin.peterson@charter-house.com">
            robin.peterson@charter-house.com
          </a>
        </p>
        <p>
          Phone: <a href="tel:6167961176">(616) 796-1176</a>
        </p>
      </div>
      <div className={styles.column}>
        <h2>More Pages</h2>
        <Link to="/">Learn more about Charter-House</Link>
        <Link to="/">Our sustainable commitment</Link>
        <Link to="/">Start a career with us</Link>
        <Link to="/">Contact us directly</Link>
        <br />
        <h3>Manufacturing</h3>
        <Link to="/">Furniture</Link>
        <Link to="/">CHiME</Link>
        <br />
        <h3>Payments</h3>
        <Link to="/">Make a Payment</Link>
      </div>
      <div className={styles.column}>
        <h2>
          Resources{" "}
          <div className={`icon ${styles.icon}`}>
            <BiLinkExternal />
          </div>
        </h2>
        <h3>Sustainability</h3>
        <a href="https://www.wm.com/" target="_blank" rel="noreferrer">
          Waste Management
        </a>
        <a href="https://recyclenation.com/" target="_blank" rel="noreferrer">
          1-800 Recycling
        </a>
        <a href="https://earth911.com/" target="_blank" rel="noreferrer">
          Earth 911
        </a>
        <br />
        <h3>Partnerships</h3>
        <a
          href="https://www.sperrysmoviehouse.com/Home/Location"
          target="_blank"
          rel="noreferrer"
        >
          Sperry's Moviehouse
        </a>
        <a href="https://cityflatshotel.com/" target="_blank" rel="noreferrer">
          City Flats Hotel
        </a>
      </div>
    </footer>
  );
};

export default Footer;
