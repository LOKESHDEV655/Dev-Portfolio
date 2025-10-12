import React from "react";

const Contact = () => (
  <section className="navg contact section" id="contact">
    <span className="section__subtitle">Get In Touch</span>
    <h2 className="section__title">Contact Me</h2>
    <div className="contact__container container grid">
      <div className="contact__content">
        <h3 className="contact__title">Talk to me</h3>
        <div className="contact__info">
          <div className="contact__card">
            <i className="bx bx-mail-send contact__card-icon"></i>
            <div className="contact__card-title">Email</div>
            <span className="contact__card-data">lokeshdev655@gmail.com</span>
            <a
              href="mailto:lokeshdev655@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__button"
            >
              Write me{" "}
              <i className="bx bx-right-arrow-alt contact__button-icon"></i>
            </a>
          </div>
          <div className="contact__card">
            <i className="bx bxl-whatsapp contact__card-icon"></i>
            <div className="contact__card-title">WhatsApp</div>
            <span className="contact__card-data">+91 9887423494</span>
            <a
              href="https://api.whatsapp.com/send?phone=+919887423494&text=Hello, more information!"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__button"
            >
              Write me{" "}
              <i className="bx bx-right-arrow-alt contact__button-icon"></i>
            </a>
          </div>
          <div className="contact__card">
            <i className="bx bxl-linkedin contact__card-icon"></i>
            <div className="contact__card-title">Linkedin</div>
            <span className="contact__card-data">Lokesh dev</span>
            <a
              href="https://www.linkedin.com/in/lokesh-dev-859a3318b/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__button"
            >
              Write me{" "}
              <i className="bx bx-right-arrow-alt contact__button-icon"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="contact__content">
        <h3 className="contact__title">Write me your query</h3>
        <form
          target="_blank"
          className="contact__form"
          action="https://formsubmit.co/lokeshdev537@gmail.com"
          method="POST"
        >
          <div className="contact__form-div">
            <label className="contact__form-tag">Name</label>
            <input
              type="text"
              placeholder="Insert your name"
              name="name"
              className="contact__form-input"
              required
            />
          </div>
          <div className="contact__form-div">
            <label className="contact__form-tag">Mail</label>
            <input
              type="email"
              placeholder="Insert your email"
              name="email"
              className="contact__form-input"
              required
            />
          </div>
          <div className="contact__form-div contact__form-area">
            <label className="contact__form-tag">Query</label>
            <textarea
              name="query"
              cols="30"
              rows="10"
              placeholder="Write your query"
              className="contact__form-input"
              required
            ></textarea>
          </div>
          <button type="submit" className="button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default Contact;
