import React from "react";

const Work = () => (
  <section className="navg work section" id="work">
    <span className="section__subtitle">My Portfolio</span>
    <h2 className="section__title">Recent Works</h2>
    <div className="work__filters">
      <span
        className="work__item mixitup-control-active active-work"
        data-filter="all"
      >
        All
      </span>
      <span className="work__item" data-filter=".web">
        Full stack
      </span>
      <span className="work__item" data-filter=".frontend">
        Frontend
      </span>
      <span className="work__item" data-filter=".design">
        Design
      </span>
    </div>
    <div className="work__container container grid">
      <div className="work__card mix web">
        <img src="assets/img/my_work1.png" alt="" className="work__img" />
        <h3 className="work__title">QuietPaper Website</h3>
        <a
          href="https://www.quietpaper.in"
          target="_blank"
          rel="noopener noreferrer"
          className="work__button"
        >
          Demo <i className="bx bx-right-arrow-alt work__icon"></i>
        </a>
      </div>
      <div className="work__card mix web">
        <img src="assets/img/my_work2.png" alt="" className="work__img" />
        <h3 className="work__title">Donation Website</h3>
        <a
          href="https://donation-sparks-foundation.000webhostapp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="work__button"
        >
          Demo <i className="bx bx-right-arrow-alt work__icon"></i>
        </a>
      </div>
      <div className="work__card mix frontend">
        <img src="assets/img/my_work3.png" alt="" className="work__img" />
        <h3 className="work__title">Pixlogix website</h3>
        <a
          href="https://khatrigautam2001.github.io/Pixlogix_Website/"
          target="_blank"
          rel="noopener noreferrer"
          className="work__button"
        >
          Demo <i className="bx bx-right-arrow-alt work__icon"></i>
        </a>
      </div>
      <div className="work__card mix design">
        <img src="assets/img/my_work5.png" alt="" className="work__img" />
        <h3 className="work__title">Starbucks Coffe Design</h3>
        <a
          href="https://khatrigautam2001.github.io/Starbucks_Coffee_Website/"
          target="_blank"
          rel="noopener noreferrer"
          className="work__button"
        >
          Demo <i className="bx bx-right-arrow-alt work__icon"></i>
        </a>
      </div>
      <div className="work__card mix frontend">
        <img src="assets/img/my_work4.png" alt="" className="work__img" />
        <h3 className="work__title">Health Therapy Website</h3>
        <a
          href="https://khatrigautam2001.github.io/heart_it_health_therapy_website/"
          target="_blank"
          rel="noopener noreferrer"
          className="work__button"
        >
          Demo <i className="bx bx-right-arrow-alt work__icon"></i>
        </a>
      </div>
    </div>
  </section>
);

export default Work;
