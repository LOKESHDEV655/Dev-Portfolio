import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Work from "./components/Work";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "../src/components/styles.css";
import "boxicons/css/boxicons.min.css";
function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        {/* <Work /> */}
        {/* <Testimonial /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
