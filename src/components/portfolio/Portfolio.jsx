import React from "react";
import "./portfolio.css";
import P1 from "../../assets/assets/portfolio1.jpg";

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className="portfolio_article">
          <div className="portfolio_img">
            <img src={P1} alt="" />
          </div>
          <h5>Portfolio Website</h5>
          <div>
            <a
              href="https://github.com/AdarshVMore/Portfolio-website"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a href="" className=" btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_article">
          <div className="portfolio_img">
            <img src={P1} alt="" />
          </div>
          <h5>Students Community Platform</h5>
          <div>
            <a
              href="https://github.com/AdarshVMore/Students-Community-Platform"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a href="" className=" btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_article">
          <div className="portfolio_img">
            <img src={P1} alt="" />
          </div>
          <h5>Data Site</h5>
          <div>
            <a
              href="https://github.com/AdarshVMore/data-site"
              target="_blank"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://growithdata.netlify.app/"
              target="_blank"
              className=" btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
