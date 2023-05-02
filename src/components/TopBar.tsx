import styles from "./TopBar.module.css";
import Logo from "./assets/logo.png";
import LightLogo from "./assets/logo-light.png";
import { Link, NavLink } from "react-router-dom";
import { useEffect } from "react";
// import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

interface Props {
  darkTheme: boolean;
}

const TopBar = ({ darkTheme }: Props) => {
  useEffect(() => {
    const compElement = document.querySelector(".topBar");
    const animatedElements = compElement?.querySelectorAll(".animation");

    const topBarObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("animation-show");
      });
    });

    animatedElements &&
      animatedElements.forEach((el) => topBarObserver.observe(el));
  });

  return (
    <div className={`${styles.topBar} topBar`}>
      <div
        className={`${styles.logo} animation`}
        style={{ transform: "translateY(-100%)" }}
      >
        <a href="/">
          {darkTheme ? (
            <img src={LightLogo} alt="Charter House Innovations Logo" />
          ) : (
            <img src={Logo} alt="Charter House Innovations Logo" />
          )}
        </a>
      </div>
      <nav className="animation" style={{ transform: "translateY(-100%)" }}>
        <NavLink to="/">Home</NavLink>
        <div className={styles.dropDown}>
          <NavLink to="/manufacturing">
            Manufacturing <span>&#9660;</span>
          </NavLink>
          <ul>
            <li>
              <NavLink to="/furniture">Furniture</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.dropDown}>
          <NavLink to="/technology">
            Technology <span>&#9660;</span>
          </NavLink>
          <ul>
            <li>
              <NavLink to="/CHiME">CHiME</NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.dropDown}>
          <NavLink to="/about">
            About <span>&#9660;</span>
          </NavLink>
          <ul>
            <li>
              <NavLink to="/about/sustainability">Sustainability</NavLink>
            </li>
            <li>
              <NavLink to="/reps">Representatives</NavLink>
            </li>
            <li>
              <NavLink to="/careers">Careers</NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/payments">Make a Payment</NavLink>
        <Link
          className={`btn ${
            darkTheme ? "btn-secondary-dark" : "btn-secondary"
          }`}
          to="/contact"
        >
          <p>Contact Us</p>
        </Link>
      </nav>
    </div>
  );
};

export default TopBar;
