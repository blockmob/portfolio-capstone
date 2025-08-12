import React from "react";
import Mid_Cards from "./../../Component/Mid_Cards/MidCards";
import Innovation from "../../Component/Innovation/Innovation";
import Hero from "../Hero/Hero";
import Faq from "../Faq/Faq";
import About from "../About/About";
import Awards from "../../Component/Awards/Awards";
import JourneyBeyondWork from "../../Component/JourneyBeyondWork/JourneyBeyond";
const HomePage = () => {
  return (
    <div style={{ width: "100%", background: "white", maxWidth: "1920px" }}>
      <Hero />
      <About />
      <Mid_Cards />
      <Innovation />
      <Awards />
      <JourneyBeyondWork />
      <Faq />
    </div>
  );
};

export default HomePage;
