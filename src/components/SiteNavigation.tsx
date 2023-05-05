import FullNavigationBar from "./FullNavigationBar";
import MobileNavigationBar from "./MobileNavigationBar";
import styles from "./SiteNavigation.module.css";

const SiteNavigation = () => {
  return (
    <>
      <div
        className={`${styles.fullNav} animation`}
        style={{ transform: "translateY(-100%)" }}
      >
        <FullNavigationBar />
      </div>
      <div className={styles.mobileNav}>
        <MobileNavigationBar />
      </div>
    </>
  );
};

export default SiteNavigation;
