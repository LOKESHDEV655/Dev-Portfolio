import React from "react";

const Skills = () => (
  <section className="skills navg section" id="skills">
    <span className="section__subtitle">My abilities</span>
    <h2 className="section__title">My Experience</h2>
    <div className="skills__container container grid">
      <div className="skills__content">
        <h3 className="skills__title">Frontend Developer</h3>
        <div className="skills__box">
          <div className="skills__group">
            <div className="skills__data">
              <i className="bx bxs-badge-check"></i>
              <div>
                <h3 className="skills__name">HTML</h3>
                <span className="skills__level">Advanced</span>
              </div>
            </div>
            <div className="skills__data">
              <i className="bx bxs-badge-check"></i>
              <div>
                <h3 className="skills__name">CSS</h3>
                <span className="skills__level">Advanced</span>
              </div>
            </div>
            <div className="skills__data">
              <i className="bx bxs-badge-check"></i>
              <div>
                <h3 className="skills__name">React JS</h3>
                <span className="skills__level">Advanced</span>
                
              </div>
            </div>
          </div>
          <div className="skills__group">
            <div className="skills__data">
              <i className="bx bxs-badge-check"></i>
              <div>
                <h3 className="skills__name">JavaScript</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
            <div className="skills__data">
              <i className="bx bxs-badge-check"></i>
              <div>
                <h3 className="skills__name">Tailwind</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
            <div className="skills__data">
              <i className="bx bxs-badge-check"></i>
              <div>
                <h3 className="skills__name">Bootstrap</h3>
                <span className="skills__level">Basic</span>                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="skills__content">
        <h3 className="skills__title">Backend Developer</h3>
        <div className="skills__box">
          <div className="skills__group">
            <div className="skills__data">
              <i className="bx bxs-badge-check"></i>
              <div>
                <h3 className="skills__name">Java</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
            <div className="skills__data">
              <i className="bx bxs-badge-check"></i>
              <div>
                <h3 className="skills__name">Spring Boot</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
          </div>
          <div className="skills__group">
            <div className="skills__data">
              <i className="bx bxs-badge-check"></i>
              <div>
                <h3 className="skills__name">MySQL</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
            <div className="skills__data">
              <i className="bx bxs-badge-check"></i>
              <div>
                <h3 className="skills__name">Microservices</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
