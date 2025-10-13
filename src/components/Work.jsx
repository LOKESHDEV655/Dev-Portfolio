import React, { useState } from "react";

const workItems = [
  {
    id: 1,
    title: "QuietPaper Website",
    img: "assets/img/my_work1.png",
    link: "https://www.quietpaper.in",
    category: "web",
  },
  {
    id: 2,
    title: "Donation Website",
    img: "assets/img/my_work2.png",
    link: "https://donation-sparks-foundation.000webhostapp.com",
    category: "web",
  },
  {
    id: 3,
    title: "Pixlogix website",
    img: "assets/img/my_work3.png",
    link: "https://khatrigautam2001.github.io/Pixlogix_Website/",
    category: "frontend",
  },
  {
    id: 4,
    title: "Starbucks Coffe Design",
    img: "assets/img/my_work5.png",
    link: "https://khatrigautam2001.github.io/Starbucks_Coffee_Website/",
    category: "design",
  },
  {
    id: 5,
    title: "Health Therapy Website",
    img: "assets/img/my_work4.png",
    link: "https://khatrigautam2001.github.io/heart_it_health_therapy_website/",
    category: "frontend",
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
