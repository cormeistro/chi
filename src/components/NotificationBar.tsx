import styles from "./NotificationBar.module.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

interface Props {
  isHidden: boolean;
  onHide: (bool: boolean) => void;
}

const NotificationBar = ({ isHidden, onHide }: Props) => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.toUpperCase() === "/CHIME") onHide(true);
    else onHide(false);
  }, [location.pathname]);

  return (
    <>
      {!isHidden && (
        <div className={`${styles.notificationBar}`}>
          <p>Introducing CHiME - our innovative suite of infrared products</p>
          <Link className="btn btn-black" to="/CHiME">
            <p>Learn More</p>
          </Link>
        </div>
      )}
    </>
  );
};

export default NotificationBar;
