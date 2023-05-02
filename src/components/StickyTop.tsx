import NotificationBar from "./NotificationBar";
import TopBar from "./TopBar";
import { useState } from "react";

const StickyTop = () => {
  const [hideNotificationBar, setHideNotificationBar] = useState(false);

  function handleHideNotificationBar(bool: boolean) {
    setHideNotificationBar(bool);
  }

  return (
    <div className={`sticky-top ${hideNotificationBar ? "dark-theme" : ""}`}>
      <NotificationBar
        isHidden={hideNotificationBar}
        onHide={handleHideNotificationBar}
      />
      <TopBar darkTheme={hideNotificationBar} />
    </div>
  );
};

export default StickyTop;
