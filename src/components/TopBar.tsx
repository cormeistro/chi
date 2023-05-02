import styles from "./TopBar.module.css";
import Logo from "./assets/logo.png";
import { Link, NavLink } from "react-router-dom";

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <div
        className={`${styles.logo} animation`}
        style={{ transform: "translateY(-100%)" }}
      >
        <a href="/">
          <img src={Logo} alt="Charter House Innovations Logo" />
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
              <NavLink to="/chime">CHiME</NavLink>
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
        <Link className="btn btn-secondary" to="/contact">
          <p>Contact Us</p>
        </Link>
      </nav>
    </div>
  );
};

export default TopBar;
