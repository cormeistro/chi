// COMPONENTS
import Footer from "./components/Footer";
import NotificationBar from "./components/NotificationBar";
import TopBar from "./components/TopBar";

import { HomePage } from "./pages";
import { BrowserRouter } from "react-router-dom";

// CSS Files
import "./styles/App.css";
import "./styles/Colors.css";
import "./styles/CompStyles.css";
import "./styles/Fonts.css";
import "./styles/Animation.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    var hiddenElements = document.querySelectorAll(".animation");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animation-show");
        }
      });
    });

    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <div className="sticky-top">
          <NotificationBar />
          <TopBar />
        </div>
        <HomePage />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
