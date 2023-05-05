import styles from "./TopBar.module.css";
import Logo from "./assets/logo.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import SiteNavigation from "./SiteNavigation";

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
      <SiteNavigation />
    </div>
  );
};

export default TopBar;
