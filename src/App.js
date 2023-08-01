import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/index";
import PackagesPage from "./pages/PackagesPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="packages" element={<PackagesPage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
