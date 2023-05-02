import styles from "./NotificationBar.module.css";
import { Link } from "react-router-dom";

const NotificationBar = () => {
  return (
    <div className={`${styles.notificationBar}`}>
      <p>Introducing CHiME - our innovative suite of infrared products</p>
      <Link className="btn btn-black" to="/CHiME">
        <p>Learn More</p>
      </Link>
    </div>
  );
};

export default NotificationBar;
