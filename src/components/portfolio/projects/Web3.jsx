import React from "react";
import P1 from "../../../assets/assets/portfolio1.png";
import P2 from "../../../assets/assets/portfolio2.png";
import P3 from "../../../assets/assets/portfolio3.png";
function Web3() {
  return (
    <div className=" portfolio_container">
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
          <img src={P3} alt="" />
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
          <img src={P2} alt="" />
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
  );
}

export default Web3;
