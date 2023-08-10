import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Packages from "../components/Packages";
import ScrollToTop from "../components/ScrollToTop";

const PackagesPage = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Packages />
      <Footer />
    </div>
  );
};

export default PackagesPage;
