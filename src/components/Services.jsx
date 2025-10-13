import React, { useState } from "react";

const Services = () => {
  const [activeModal, setActiveModal] = useState(null);

  // Helper to open modal by index
  const openModal = (index) => setActiveModal(index);
  // Helper to close modal
  const closeModal = () => setActiveModal(null);

  return (
    <section className="services section">
      <span className="section__subtitle">My Services</span>
      <h2 className="section__title">What I Offer</h2>
      <div className="services__container container grid">
        {/* Web Designer */}
        <div className="services__card">
          <h3 className="services__title">
            Web <br /> Developer
          </h3>
          <span
            className="services__button"
            onClick={() => openModal(1)}
            style={{ cursor: "pointer" }}
          >
            See more <i className="bx bx-right-arrow-alt services__icon"></i>
          </span>
          <div className={`services__modal${activeModal === 1 ? " active-modal" : ""}`}>
            <div className="services__modal-content">
              <i
                className="bx bx-x services__modal-close"
                onClick={closeModal}
                style={{ cursor: "pointer" }}
              ></i>
              <h3 className="services__modal-title">
                Web <br /> Designer
              </h3>
              <p className="services__modal-description">
                Service with more than 1 years of experience. Providing quality
                work to clients and companies.
              </p>
              <ul className="services__modal-list">
                <li className="services__modal-item">
                  <i className="bx bx-check services__modal-icon"></i>
                  <p className="services__modal-info">
                    I develop the user interface.
                  </p>
                </li>
                <li className="services__modal-item">
                  <i className="bx bx-check services__modal-icon"></i>
                  <p className="services__modal-info">Web Page Development.</p>
                </li>
                <li className="services__modal-item">
                  <i className="bx bx-check services__modal-icon"></i>
                  <p className="services__modal-info">
                    I create ux element interactions.
                  </p>
                </li>
                <li className="services__modal-item">
                  <i className="bx bx-check services__modal-icon"></i>
                  <p className="services__modal-info">
                    I position your company brand.
                  </p>
                </li>
                <li className="services__modal-item">
                  <i className="bx bx-check services__modal-icon"></i>
                  <p className="services__modal-info">
                    Design and mockups of websites for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* UI/UX Designer */}
        <div className="services__card">
          <h3 className="services__title">
            Ui/Ux <br /> Designer
          </h3>
          <span
            className="services__button"
            onClick={() => openModal(2)}
            style={{ cursor: "pointer" }}
          >
            See more <i className="bx bx-right-arrow-alt services__icon"></i>
          </span>
          <div className={`services__modal${activeModal === 2 ? " active-modal" : ""}`}>
            <div className="services__modal-content">
              <i
                className="bx bx-x services__modal-close"
                onClick={closeModal}
                style={{ cursor: "pointer" }}
              ></i>
              <h3 className="services__modal-title">
                Ui/Ux <br /> Designer
              </h3>
              <p className="services__modal-description">
                Service with more than 1 years of experience. Providing quality
                work to clients and companies.
              </p>
              <ul className="services__modal-list">
                <li className="services__modal-item">
                  <i className="bx bx-check services__modal-icon"></i>
                  <p className="services__modal-info">
                    I develop the user interface.
                  </p>
                </li>
                <li className="services__modal-item">
                  <i className="bx bx-check services__modal-icon"></i>
                  <p className="services__modal-info">Web Page Development.</p>
                </li>
                <li className="services__modal-item">
                  <i className="bx bx-check services__modal-icon"></i>
                  <p className="services__modal-info">
                    I create ux element interactions.
                  </p>
                </li>
                <li className="services__modal-item">
                  <i className="bx bx-check services__modal-icon"></i>
                  <p className="services__modal-info">
                    I position your company brand.
                  </p>
                </li>
                <li className="services__modal-item">
                  <i className="bx bx-check services__modal-icon"></i>
                  <p className="services__modal-info">
                    Design and mockups of websites for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Photo Editor */}
        <div className="services__card">
          <h3 className="services__title">
            Photo <br /> Editor
          </h3>
          <span
            className="services__button"
            onClick={() => openModal(3)}
            style={{ cursor: "pointer" }}
          >
            See more <i className="bx bx-right-arrow-alt services__icon"></i>
          </span>
          <div className={`services__modal${activeModal === 3 ? " active-modal" : ""}`}>
            <div className="services__modal-content">
              <i
                className="bx bx-x services__modal-close"
                onClick={closeModal}
                style={{ cursor: "pointer" }}
              ></i>
              <h3 className="services__modal-title">Photo Editor</h3>
              <p className="services__modal-description">
                Service with more than 3 years of experience. Providing quality
                work to clients and companies.
              </p>
              <ul className="services__modal-list">
                <li className="services__modal-item">
                  <i className="bx bx-check services__modal-icon"></i>
                  <p className="services__modal-info">
                    I edit the photos and make them beautiful.
                  </p>
                </li>
                <li className="services__modal-item">
                  <i className="bx bx-check services__modal-icon"></i>
                  <p className="services__modal-info">
                    I love to click Portraits.
                  </p>
                </li>
                <li className="services__modal-item">
                  <i className="bx bx-check services__modal-icon"></i>
                  <p className="services__modal-info">
                    I'm a Mobile Photographer.
                  </p>
                </li>
                <li className="services__modal-item">
                  <i className="bx bx-check services__modal-icon"></i>
                  <p className="services__modal-info">
                    Providing the same quality after edits.
                  </p>
                </li>
                <li className="services__modal-item">
                  <i className="bx bx-check services__modal-icon"></i>
                  <p className="services__modal-info">
                    Available for Collaboration.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
