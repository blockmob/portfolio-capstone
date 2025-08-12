import React from "react";
import "./footer.css";
import { useState } from "react";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  return (
    <footer className="footer-container" id="Contact">
      <div className="contactUs-bg-black">
        <div className="contactUsContainer">
          <div className="ContactUs-LeftContainer" data-aos="fade-right">
            <p className="Lets-contact-us">Lets</p>
            <h2>
              get in
              <br className="GetInTouchBreaklINE" /> touch
            </h2>{" "}
          </div>
          <div className="ContactUs-form" data-aos="fade-left">
            <div style={{ width: "100%" }}>
              <input
                type="text"
                placeholder="Name"
                className="ContactUsName"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Email"
                className="ContactUsName"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                placeholder="Message"
                className="ContactUsName ContactUsMessage"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <div
                className="CheckBoxSubscription"
                onClick={() => setIsSubscribed(!isSubscribed)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={
                    isSubscribed
                      ? "/Images/Faq/checkFill.svg"
                      : "/Images/Faq/Checkbox.svg"
                  }
                  alt="checkBox"
                />
                <p className="SubscriptionPara">
                  I would like to receive the newsletter.
                </p>
              </div>
            </div>
            <button className="Send-Message-Button">
              Send Message
              <img
                src="/Images/Faq/ArrowIcon.png"
                alt="ArrowIcon"
                className="ArrowIconwithbg"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="footer-bottom-with-bg">
        <div className="Footer-bottom" data-aos="fade-right">
          <img
            src="/Images/Faq/whiteLogo.png"
            alt="whiteLogo"
            className="Footer-Logo"
          />
          <div className="Social-Platform" >
            <img src="/Images/Faq/facebook.png" alt="faceBook" />
            <img src="/Images/Faq/X.png" alt="faceBook" />
            <img src="/Images/Faq/linkedIn.png" alt="faceBook" />
            <img src="/Images/Faq/insta.png" alt="faceBook" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
