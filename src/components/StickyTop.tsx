import NotificationBar from "./NotificationBar";
import TopBar from "./TopBar";

const StickyTop = () => {
  return (
    <div className="sticky-top">
      <NotificationBar />
      <TopBar />
    </div>
  );
};

export default StickyTop;
