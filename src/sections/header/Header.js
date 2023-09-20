import React from "react";
import { useEffect } from "react";
import HomeImg from "../../assets/home (2).jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import "./header.css";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <img className="headerImg" src={HomeImg} alt="background img" />

      <header className="container header-container">
        <div className="header-content">
          <h2>You Can Trust Us!</h2>
          <p>
            For all your residential and commercial plumbing needs repair,
            replacement, and installation.
          </p>
        </div>
        <div className="header-cta">
          <a href="tel:+8189387283" className="btn">
            (818)-938-7283
          </a>
          <a href="#contact" className="btn">
            Schedule Now
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
