import React from "react";
import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import About from "./sections/about/About";
import Specials from "./sections/specials/Specials";
import Contact from "./sections/contacts/Contact";
import Services from "./sections/services/Services";

// Installed pacages
// npm install react-icons --save
// npm install aos --save, for animating on scroll (check AOS for different effects)
//
const App = () => {

  return (
    <main >
      <Navbar />
      <Header />
      <Services />
      <Specials />
      <About />
      <Contact />
    </main>
  );
};

export default App;
