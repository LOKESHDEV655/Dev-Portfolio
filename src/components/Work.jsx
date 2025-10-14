import React, { useState } from "react";
import gif from "../assets/img/gifImg.png";
import cart from "../assets/img/cart.png";
import tictactoe from "../assets/img/tictactoe.png";
import blogs from "../assets/img/blogs.png";
import portfolio from "../assets/img/portfolio.png";

const workItems = [
  {
    id: 1,
    title: "E-commerce website",
    img: cart,
    link: "https://shopping-cart-15.vercel.app/",
    category: "web",    
  },
  // {
  //   id: 2,
  //   title: "Random gif generator",
  //   img: gif,
  //   link: "https://random-gif-generator-ivory.vercel.app/",
  //   category: "web",
  // },
  {
    id: 2,
    title: "Portfolio Template",
    img: portfolio,
    link: "https://portfolio-template-gamma-dusky.vercel.app/",
    category: "frontend",
  },
  {
    id: 3,
    title: "Blogs Website",
    img: blogs,
    link: "https://dev-blogs-ruby.vercel.app/",
    category: "frontend",
  },
  {
    id: 4,
    title: "Tic Tac Toe Game",
    img: tictactoe,
    link: "https://tic-tac-toe-lime-zeta.vercel.app/",
    category: "design",
  },
];

const filters = [
  { label: "All", value: "all" },
  { label: "Full stack", value: "web" },
  { label: "Frontend", value: "frontend" },
  { label: "Design", value: "design" },
];

const Work = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredWorks =
    selectedFilter === "all"
      ? workItems
      : workItems.filter((item) => item.category === selectedFilter);

  return (
    <section className="navg work section" id="work">
      <span className="section__subtitle">My Portfolio</span>
      <h2 className="section__title">Recent Works</h2>
      <div className="work__filters">
        {filters.map((filter) => (
          <span
            key={filter.value}
            className={`work__item${
              selectedFilter === filter.value ? " mixitup-control-active active-work" : ""
            }`}
            onClick={() => setSelectedFilter(filter.value)}
            style={{ cursor: "pointer" }}
          >
            {filter.label}
          </span>
        ))}
      </div>
      <div className="work__container container grid">
        {filteredWorks.map((work) => (
          <div key={work.id} className={`work__card mix ${work.category}`}>
            <img src={work.img} alt="" className="work__img" />
            <h3 className="work__title">{work.title}</h3>
            <a
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              className="work__button"
            >
              Demo <i className="bx bx-right-arrow-alt work__icon"></i>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
