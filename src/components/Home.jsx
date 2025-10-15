import React, { useEffect, useRef } from "react";
import TypingCursor from "./TypingCursor";

const Home = () => {
  const educationRef = useRef(null);

  useEffect(() => {
    // Typed.js effect
    if (window.Typed && educationRef.current) {
      new window.Typed(educationRef.current, {
        strings: [
          "Full Stack Web Developer",
          "Frontend Enthusiast",
          "Django Developer",
          "Photographer",
          "TT Player",
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
      });
    }
  }, []);

  return (
    <section className="navg home section" id="home">
      <div className="home__container container grid">
        <div className="home__data">
          <span className="home__greeting">Hello, I'm</span>
          <h1 className="home__name">Lokesh Dev</h1>

          <TypingCursor />
          {/* <span className="home__education" ref={educationRef}>
            Full Stack Web Developer
          </span>
          <span className="typed-cursor" aria-hidden="true">
            |
          </span> */}
          <div className="home__buttons">
            <a
              download
              href="assets/pdf/Lokesh_dev_resume.pdf"
              className="button button--ghost"
            >
              Download Resume
            </a>
            <a href="#about" className="button">
              About me
            </a>
          </div>
        </div>
        <div className="home__handle">
          <img src="assets/img/my_prefil.png" alt="" className="home__img" />
        </div>
        <div className="home__social">
          <a
            href="https://www.linkedin.com/in/lokesh-dev-859a3318b/"
            target="_blank"
            rel="noopener noreferrer"
            className="home__social-link"
          >
            <i className="bx bxl-linkedin-square"></i>
          </a>
          <a
            href="https://github.com/LOKESHDEV655"
            target="_blank"
            rel="noopener noreferrer"
            className="home__social-link"
          >
            <i className="bx bxl-github"></i>
          </a>
          {/* <a
            href="https://www.figma.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="home__social-link"
          >
            <i className="bx bxl-figma"></i>
          </a> */}
        </div>
        <a href="#about" className="home__scroll">
          <i className="bx bx-mouse home__scroll-icon"></i>
          <span className="home__scroll-name">Scroll Down</span>
        </a>
      </div>
    </section>
  );
};

export default Home;
