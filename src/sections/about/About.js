import React from "react";
import AboutImage from "../../assets/plumber.png";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <div className="container about-container">
        <div className="about-left" data-aos="fade-in">
          <div className="about-portrait">
            <img src={AboutImage} alt="About Img" />
          </div>
        </div>
        <div className="about-right" data-aos="fade-up">
          <h2><img className="small-img" src={AboutImage} alt="About Img" /> About Us</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut quas
            expedita sequi eaque iusto labore, neque voluptatibus adipisci
            dolorem doloribus reprehenderit voluptas culpa vel possimus tenetur
            nesciunt voluptate libero ex!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut quas
            expedita sequi eaque iusto labore, neque voluptatibus adipisci
            dolorem doloribus reprehenderit voluptas culpa vel possimus tenetur
            nesciunt voluptate libero ex! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Ut quas expedita sequi eaque iusto
            labore, neque voluptatibus adipisci dolorem doloribus reprehenderit
            voluptas culpa vel possimus tenetur nesciunt voluptate libero ex!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
