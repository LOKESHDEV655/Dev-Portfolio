import React from "react";

const Footer = () => (
  <footer className="footer">
    <div className="footer__container container grid">
      <h1 className="footer__title">Lokesh</h1>
      <ul className="footer__list">
        <li>
          <a href="#about" className="footer__link">About</a>
        </li>
        <li>
          <a href="#work" className="footer__link">Projects</a>
        </li>
        {/* <li>
          <a href="#testimonial" className="footer__link">Testimonial</a>
        </li> */}
      </ul>
      <ul className="footer__social">
        <a href="#" target="_blank" rel="noopener noreferrer" className="footer__social-link">
          <i className="bx bxl-facebook"></i>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="footer__social-link">
          <i className="bx bxl-instagram"></i>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="footer__social-link">
          <i className="bx bxl-twitter"></i>
        </a>
      </ul>
      <span className="footer__copy">
        Copyright © 2025 All Rights Reserved | Designed by Lokesh Dev
      </span>
    </div>
  </footer>
);

export default Footer;