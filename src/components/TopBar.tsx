import styles from "./TopBar.module.css";
import Logo from "./assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useEffect } from "react";
import TopBarListLink from "./TopBarListLink";
import TopBarDropLink from "./TopBarDropLink";
// import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const TopBar = () => {
  useEffect(() => {
    const compElement = document.querySelector(".topBar");
    const animatedElements = compElement?.querySelectorAll(".animation");
    animatedElements?.forEach((el) => el.classList.add("animation-show"));
  }, []);

  return (
    <div className={`${styles.topBar} topBar`}>
      <div
        className={`${styles.logo} animation`}
        style={{ transform: "translateY(-100%)" }}
      >
        <Link to="/">
          <img src={Logo} alt="Charter House Innovations Logo" />
        </Link>
      </div>
      <nav className="animation" style={{ transform: "translateY(-100%)" }}>
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
        <Link className="btn btn-secondary" to="/">
          Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default TopBar;
