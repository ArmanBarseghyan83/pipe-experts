import React from "react";
import Card from "../../components/Card";
import data from "./data";
import "./specials.css";

const Specials = () => {
  return (
    <section id="specials">
      <h2>Specials</h2>
      <div className="container specials-container" data-aos="fade-up">
        {data.map((item) => (
          <Card key={item.id} className="special light">
            <div>
              <h4>{item.title}</h4>
              <div>{item.desc}</div>
              <p>asfdsafdsa</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Specials;
