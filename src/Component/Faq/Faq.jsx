import React from "react";
import "./Faq.css";
import { useState } from "react";
import Footer from "../footer/footer";
const accordionData = [
  {
    question: "What kind of projects do you typically work on?",
    answer:
      "I focus on projects that combine technology, strategy, and real-world impact—especially in blockchain, fintech, and digital infrastructure. Whether launching a startup or transforming a legacy system, I prioritize scalability and clarity.",
  },
  {
    question: "What is Capstone Blockchain DMCC?",
    answer:
      "Capstone is a transformation group I lead that helps governments and enterprises navigate Web3 and blockchain technologies. We build real-world solutions in areas like digital identity, tokenization, and DeFi.",
  },
  {
    question: "Can I collaborate with you on a venture or idea?",
    answer:
      "I’m always open to aligned collaborations—especially projects with clear vision, purpose, and execution potential. Feel free to reach out through my contact form or LinkedIn.",
  },
  {
    question: "What industries do you have experience in?",
    answer:
      "I’ve worked across fintech, blockchain, gaming, real estate tech, and identity systems. My strength lies in applying systems thinking to drive innovation across multiple sectors.",
  },
];

const Faq = () => {
  //   const [activeIndex, setActiveIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0); // default to first item open

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
    <div className="MainContainerFaq">
      <div className="Faq-left-container">
        <div className="aboutdiv">
          <p className="about-section-number">08/</p>
          <p className="about-section-number">FaQ</p>
        </div>
        <p className="awards-title  fadshfdhsfh">
          Discover
          <br className="FaqbreakLine"/> frequently asked questions
        </p>
      </div>
      <div className="Faq-right-container">
        {accordionData.map((item, index) => (
          <div key={index} className="perFaqContainer">
            <div
              onClick={() => toggleAccordion(index)}
              //   style={{
              //     display: "flex",
              //     justifyContent: "space-between",
              //     alignItems: "center",
              //     fontWeight: "500",
              //   }}
              className="Faq-question-top-arrow"
            >
              <p className="Faq-Question"> {item.question}</p>
              <img
                src="/Images/Faq/arrowDown.svg"
                alt="arrow"
                className={activeIndex === index ? "arrow rotated" : "arrow"}
              />
            </div>

           <div
  className={`Faq-Answer-Wrapper ${activeIndex === index ? "open" : ""}`}
>
  <p className="Faq-Answer">{item.answer}</p>
</div>

          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Faq;
