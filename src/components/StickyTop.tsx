import NotificationBar from "./NotificationBar";
import TopBar from "./TopBar";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const StickyTop = () => {
  const [hideNotificationBar, setHideNotificationBar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.toUpperCase() === "/CHIME")
      setHideNotificationBar(true);
    else setHideNotificationBar(false);
  }, [location.pathname]);

  return (
    <div
      className={`sticky-top ${
        hideNotificationBar ? "animate-up-100 dark-theme" : ""
      }`}
    >
      <NotificationBar />
      <TopBar darkTheme={hideNotificationBar} />
    </div>
  );
};

export default StickyTop;
