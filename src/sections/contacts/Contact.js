import React from "react";
import Logo from "../../assets/hovoLogo.png";
import "./contact.css";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-container">
          <h2>Contact Us</h2>
          <div className="tel">
            <div>
              <FaPhoneAlt />
            </div>
            <a href="tel:+18189387283"> (818) 938-7283</a>
          </div>
          <a href="sms:+18189387283" className="btn">
            (818)-938-7283 Message
          </a>
          <a href="mailto:pipeexpertsinc@gmail.com" className="btn">
            pipeexpertsinc@gmail.com
          </a>
        </div>
        <form
          action="https://formsubmit.co/pipeexpertsinc@gmail.com"
          method="POST"
        >
          <h4>Your Email</h4>
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="Piumbing Request" />
          <input type="email" name="email" required />
          <h4>Describe Your Issue</h4>
          <input type="hidden" name="_next" value="https://armanbarseghyan83.github.io/pipe-experts/" />
          <textarea name="message" required></textarea>
          <input type="submit" />
        </form>
      </div>

      <footer>
        <div>
          <img src={Logo} alt="Logo" /> &copy; {currentYear}
        </div>
      </footer>
    </section>
  );
};

export default Contact;
