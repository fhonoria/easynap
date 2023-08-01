import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  infoAbout,
  infoContact,
  infoProblems,
  infoProcess,
  infoResult,
} from "../components/InfoSection/Data";
import Services from "../components/Services";
import Mission from "../components/Mission";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <Mission />
      <InfoSection {...infoProblems} />
      <InfoSection {...infoProcess} />
      <InfoSection {...infoResult} />
      <Services />
      <InfoSection {...infoAbout} />
      <InfoSection {...infoContact} />
      <Footer />
    </>
  );
};

export default Home;
