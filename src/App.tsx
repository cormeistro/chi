// COMPONENTS
import Footer from "./components/Footer";
import StickyTop from "./components/StickyTop";
import ScrollToTop from "./components/ScrollToTop";

import { HomePage } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// CSS Files
import "./styles/App.css";
import "./styles/Colors.css";
import "./styles/CompStyles.css";
import "./styles/Fonts.css";
import "./styles/Animation.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <StickyTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
