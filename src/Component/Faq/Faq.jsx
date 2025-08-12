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
      "Capstone Blockchain DMCC is a Dubai-based company specializing in blockchain solutions, advisory, and infrastructure projects.",
  },
  {
    question: "Can I collaborate with you on a venture or idea?",
    answer:
      "Absolutely! I enjoy collaborating on innovative projects that align with my expertise and values.",
  },
  {
    question: "What industries do you have experience in?",
    answer:
      "My experience spans blockchain, fintech, logistics, and enterprise digital transformation.",
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
        <div className="Faq-heading-section-part">
          <p className="FaqsectionPart">07/</p>
          <p className="faqSectionheading">FaQ</p>
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

            {activeIndex === index && (
              <p className="Faq-Answer">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Faq;
