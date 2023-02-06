import React from "react";
import "./portfolio.css";
import P1 from "../../assets/assets/portfolio1.png";
import P2 from "../../assets/assets/portfolio2.png";
import P3 from "../../assets/assets/portfolio3.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

function Portfolio() {
  const portRef = useRef(null);
  const portArticleRef = useRef(null);
  useEffect(() => {
    const portHeader = portRef.current;
    const portArticle = portArticleRef.current;

    gsap.fromTo(
      ".portHeader",
      {
        opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.2,
        stagger: 0.1,
        scrollTrigger: {
          trigger: portHeader,
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "restart reverse restart reverse",
          // markers: true,
        },
      }
    );

    gsap.fromTo(
      ".portfolio_article",
      {
        opacity: 0,
        y: 15,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: portArticle,
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "restart reverse restart reverse",
          // markers: true,
        },
      }
    );
  });
  return (
    <section id="portfolio" ref={portRef}>
      <h5 className="portHeader">My Recent work</h5>
      <h2 className="portHeader">Portfolio</h2>
      <div className="container portfolio_container" ref={portArticleRef}>
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
      <h5 className=" portLower">More to Arrive here</h5>
    </section>
  );
}

export default Portfolio;
