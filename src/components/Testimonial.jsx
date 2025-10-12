import React from "react";

const Testimonial = () => (
  <section className="testimonial section" id="testimonial">
    <span className="section__subtitle">My Clients Say</span>
    <h2 className="section__title">Testimonial</h2>
    <div className="testimonial__container container">
      <div className="testimonial__card">
        <img
          src="assets/img/my_testimonial1.jpg"
          alt=""
          className="testimonial__img"
        />
        <h3 className="testimonial__name">Ram</h3>
        <p className="testimonial__description">
          A really good job and all aspects of the website were followed step by
          step and with good results.
        </p>
      </div>
      <div className="testimonial__card">
        <img
          src="assets/img/my_testimonial2_new.jpg"
          alt=""
          className="testimonial__img"
        />
        <h3 className="testimonial__name">Ashish Burnwal</h3>
        <p className="testimonial__description">
          Gautam did a great job for me by making a good website including all
          the functionality which I want.
        </p>
      </div>
      <div className="testimonial__card">
        <img
          src="assets/img/testimonial3.png"
          alt=""
          className="testimonial__img"
        />
        <h3 className="testimonial__name">Urvashi</h3>
        <p className="testimonial__description">
          I really appreciate the work done by Gautam, he made a good website
          for me although having a good nature.
        </p>
      </div>
    </div>
  </section>
);

export default Testimonial;
