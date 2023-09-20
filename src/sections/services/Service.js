import React from "react";
import Card from "../../components/Card";

const Service = ({ service }) => {
  return (
    <Card className="service"  >
      <div className="service-img">
        <img src={service.image} alt="Service Img" />
      </div>
      <div>
        <h4>{service.title}</h4>
      </div>
    </Card>
  );
};

export default Service;
