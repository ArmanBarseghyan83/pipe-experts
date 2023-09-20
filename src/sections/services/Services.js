import React from "react";
import "./services.css";
import ServiceList from "./ServiceList";
import data from "./data";


const Services = () => {
 
  return (
    <section id="services" >
      <h2>PLUMBING SERVICES</h2>
      <div className="container" data-aos="fade-up" >
        <ServiceList serviceList={data}  />
      </div>
    </section>
  );
};

export default Services;
