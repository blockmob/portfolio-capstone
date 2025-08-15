import React, { useEffect, useState } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import "./Hero.css";
const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 450);
  }, []);

  const scrollToFooter = () => {
    const footerEl = document.getElementById("Contact");
    if (footerEl) {
      footerEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="Hero-Container" id="Home" style={{ overflowX: "hidden" }}>
      <Navbar />
      <div className="MainHeroDiv">
        <div className="card-section">
          <div
            className="card-section-top"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <p className="textvis">Visionary Leadership</p>
            <p className="textvis">Digital Transformation</p>
            <p className="textvis">Regulatory Navigation</p>
            <p className="textvis">Strategy & Execution</p>
          </div>

          <div
            className="card-section-bottom"
            data-aos="fade-right"
            data-aos-delay="700"
          >
            <p className="learntext">
              I Learn, grow, and lead.
              <br />I dont just imagine a better future- I craft it.
            </p>
            <button className="lettalk" onClick={scrollToFooter}>
              Let’s Talk
              <img
                src="/Images/Hero/arrow.svg"
                alt="arrow"
                className="arrowicon"
              />
            </button>
          </div>
        </div>

        <div className="valuediv" data-aos="fade-left" data-aos-delay="1200">
          <p className="valuetext">Value Proposition Disclosures and Vision</p>
          <p className="valuetextdet">
            I’m Abdullah, a business leader, strategist, and transformation
            advisor with a focus on building scalable, future-ready
            organizations across technology and finance.
          </p>
          <p className="textyear">© 2025</p>
        </div>
      </div>
      {isMobile ? (
        <img
          src="/Images/Hero/hhhuhuhu.webp"
          data-aos="zoom-in-up"
          data-aos-delay="100"
          className="MainPicPerson"
          alt=""
        />
      ) : (
        <img
          src="/Images/Hero/AbudullahNewPic.webp"
          data-aos="zoom-in-up"
          data-aos-delay="30"
          className="MainPicPerson"
          alt=""
        />
      )}
      {isMobile && (
        <img
          src="/Images/Hero/logo.png"
          data-aos="zoom-in-up"
          data-aos-delay="100"
          className="herologo"
          alt=""
        />
      )}
      {/* <img src='/Images/Hero/AbudullahNewPic.webp' data-aos="zoom-in-up" data-aos-delay="100" className='MainPicPerson' alt='' /> */}
      <img src="/Images/Hero/TitlePic.png" className="titlePerson" alt="" />
    </div>
  );
};

export default Hero;
