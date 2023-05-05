import { Link, NavLink } from "react-router-dom";
import styles from "./MobileNavigationBar.module.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useState } from "react";

const MobileNavigationBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return showMenu ? (
    <div>
      <div className={`icon ${styles.icon}`}>
        <RiCloseLine onClick={() => setShowMenu(false)} />
      </div>
      <nav className={styles.navigation}>
        <NavLink to="/">Home</NavLink>
        <Link to="/">Manufacturing</Link>
        <Link to="/">Design</Link>
        <Link to="/">Technology</Link>
        <Link to="/">About</Link>
        <Link to="/">Make a Payment</Link>
        <Link className="btn btn-secondary-outline" to="/">
          Contact Us
        </Link>
      </nav>
    </div>
  ) : (
    <div className={`icon ${styles.icon}`}>
      <RiMenu3Line onClick={() => setShowMenu(true)} />
    </div>
  );
};

export default MobileNavigationBar;
