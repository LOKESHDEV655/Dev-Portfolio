import React, { useState, useEffect } from "react";

const Header = () => {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [activeNav, setActiveNav] = useState("#home");

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const handleThemeToggle = () => {
    setDark((prev) => !prev);
  };

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          Lokesh
        </a>
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a
                href="#home"
                className={`nav__link${
                  activeNav === "#home" ? " active-link" : ""
                }`}
                onClick={() => setActiveNav("#home")}
              >
                <i className="bx bx-home-alt"></i>
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                className={`nav__link${
                  activeNav === "#about" ? " active-link" : ""
                }`}
                onClick={() => setActiveNav("#about")}
              >
                <i className="bx bx-user"></i>
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                className={`nav__link${
                  activeNav === "#skills" ? " active-link" : ""
                }`}
                onClick={() => setActiveNav("#skills")}
              >
                <i className="bx bx-book"></i>
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#work"
                className={`nav__link${
                  activeNav === "#work" ? " active-link" : ""
                }`}
                onClick={() => setActiveNav("#work")}
              >
                <i className="bx bx-briefcase-alt-2"></i>
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                className={`nav__link${
                  activeNav === "#contact" ? " active-link" : ""
                }`}
                onClick={() => setActiveNav("#contact")}
              >
                <i className="bx bx-message-square-detail"></i>
              </a>
            </li>
          </ul>
        </div>
        <i
          className={`bx change-theme ${dark ? "bx-sun" : "bx-moon"}`}
          id="theme-button"
          onClick={handleThemeToggle}
          style={{ cursor: "pointer" }}
          title={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        ></i>
      </nav>
    </header>
  );
};

export default Header;
