import React from "react";
import Service from "./Service";

const ServiceList = ({ serviceList }) => {
  return (
    <div className="service-list">
      {serviceList.map((service) => (
        <Service key={service.id} service={service} />
      ))}
    </div>
  );
};

export default ServiceList;
