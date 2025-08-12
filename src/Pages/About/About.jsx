import React, { useEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";
import '../Hero/Hero.css';
gsap.registerPlugin(ScrollTrigger);

function About() {
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;

    // Split the text into words
    const splitText = new SplitType(el, { types: "words" });

    // Animate the words
    gsap.fromTo(
      splitText.words,
      { color: "#1D1E2480" }, // start faded
      {
        color: "#1D1E24", // end solid
        duration: 0.3,
        stagger: 0.1,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
          toggleActions: "play reverse play reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      splitText.revert();
    };
  }, []);

  return (
    <section className="about-section">
      {/* Left Section */}
      <div className="about-left">
        <div className="aboutdiv">
          <p className="about-section-number">01/</p>
          <p className="about-section-number">ABOUT ME</p>
        </div>
        <p className="about-left-text">
          Currently, I serve as CEO of <span className="bold">CapstoneTG.io</span>,
          where we lead transformational digital initiatives. I’m also the co-founder
          of <span className="bold">Gaya Wallet</span> and <span className="bold">Gaya Blockchain</span>,
          redefining how people engage with finance and decentralized ecosystems.
        </p>
      </div>

      {/* Right Section */}
      <div className="about-right">
        <div className="about-line"></div>
        <p ref={textRef} className="about-right-text-new">
          I'm a business leader with over a decade of experience in launching, scaling,
          and advising high-impact ventures. I specialize in bridging vision and execution—
          helping companies and governments solve real problems through blockchain,
          fintech, and emerging technologies.
        </p>
      </div>
    </section>
  );
}

export default About;
