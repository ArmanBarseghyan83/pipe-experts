import React from "react";
import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import About from "./sections/about/About";
import Specials from "./sections/specials/Specials";
import Contact from "./sections/contacts/Contact";
import Services from "./sections/services/Services";

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
