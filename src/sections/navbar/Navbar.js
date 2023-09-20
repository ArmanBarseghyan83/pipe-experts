import React from "react";
import Logo from "../../assets/hovoLogo.png";
import data from "./data";
import "./navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="container nav-container">
        <a href="#" className="nav-logo">
        <img src={Logo} alt="Logo" />
        </a>
        <ul className="nav-menu">
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        
      </div>
    </nav>
  );
}

export default Navbar;
