import { Link, NavLink } from "react-router-dom";
import TopBarListLink from "./TopBarListLink";
import TopBarDropLink from "./TopBarDropLink";
import styles from "./FullNavigationBar.module.css";

const FullNavigationBar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <div className={styles.dropDown}>
        <TopBarDropLink location="/" text="Manufacturing" />
        <ul>
          <TopBarListLink location="/" text="Furniture" />
          <TopBarListLink location="/" text="Our Facilities" />
          <TopBarListLink location="/" text="View Projects" />
        </ul>
      </div>
      <div className={styles.dropDown}>
        <TopBarDropLink location="/" text="Design" />
        <ul>
          <TopBarListLink location="/" text="Interior Design" />
          <TopBarListLink location="/" text="Graphics & Digital" />
          <TopBarListLink location="/" text="Our Inspiration" />
        </ul>
      </div>
      <div className={styles.dropDown}>
        <TopBarDropLink location="/" text="Technology" />
        <ul>
          <TopBarListLink location="/" text="CHiME" />
          <TopBarListLink location="/" text="Future Innovations" />
        </ul>
      </div>
      <div className={styles.dropDown}>
        <TopBarDropLink location="/" text="About" />
        <ul>
          <TopBarListLink location="/" text="Our Company" />
          <TopBarListLink location="/" text="Sustainability" />
          <TopBarListLink location="/" text="Regional Reps" />
          <TopBarListLink location="/" text="Working at CHI" />
        </ul>
      </div>
      <Link to="/">Make a Payment</Link>
      <Link className="btn btn-secondary box-shadow-light" to="/">
        Contact Us
      </Link>
    </nav>
  );
};

export default FullNavigationBar;
