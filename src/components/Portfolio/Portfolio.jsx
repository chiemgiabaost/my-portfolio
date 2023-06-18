import React from 'react';
import project from "../../assets/project.png";
import "./portfolio.css";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: project,
      title: "Crypto Dashboard",
      github: "https://github.com",
      dribbble: "https://dribbble.com/Alien_pixels"
    },
    {
      id: 2,
      image: project,
      title: "Crypto Dashboard",
      github: "https://github.com",
      dribbble: "https://dribbble.com/Alien_pixels"
    },
    {
      id: 3,
      image: project,
      title: "Crypto Dashboard",
      github: "https://github.com",
      dribbble: "https://dribbble.com/Alien_pixels"
    },
    {
      id: 4,
      image: project,
      title: "Crypto Dashboard",
      github: "https://github.com",
      dribbble: "https://dribbble.com/Alien_pixels"
    }
  ];

  return (
    <section id="Portfolio">
      <h5>My Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, dribbble }) => (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt="" />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className="btn" target="_blank" rel="noopener noreferrer">
                Github
              </a>
              <a href={dribbble} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
