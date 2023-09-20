import foodorder from "../../assets/food-order.jpg";
import homerentals from "../../assets/home-rentals.jpg";
import email from "../../assets/email.jpg";
import expense from "../../assets/expense.jpg";
import ecommerce from "../../assets/e-commerce.jpg";
import meetups from "../../assets/meetups.jpg";
import events from "../../assets/events.jpg";
import blog from "../../assets/blog.jpg";

const data = [
  {
    id: 1,
    image: homerentals,
    title: "Bathroom Upgrades",
  },
  {
    id: 2,
    image: email,
    title: "Repiping",
  },

  {
    id: 3,
    image: ecommerce,
    title: "Garbage Disposal",
   
  },
  {
    id: 4,
    image: foodorder,
    title: "Kitchen Sink Installation",
    desc: (
      <>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut quas
        expedita sequi eaque iusto labore, neque voluptatibus adipisci dolorem
        doloribus reprehenderit voluptas culpa vel possimus tenetur nesciunt
        voluptate libero ex!
      </>
    ),
  },
  {
    id: 5,
    image: expense,
    title: "Drain Maintenance",
   
  },
  {
    id: 6,
    image: events,
    title: "Whater Heaters",

  },
  {
    id: 7,
    image: meetups,
    title: "Sewer Repair",
  
  },
  {
    id: 8,
    image: blog,
    title: "Toilet Repair",
    
  },
];

export default data;
