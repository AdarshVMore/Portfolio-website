import React from "react";
import "./portfolio.css";

import Frontend from "./projects/Frontend";
import Web2 from "./projects/Web2";
import Web3 from "./projects/Web3";
import UiUx from "./projects/UiUx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useEffect, useState } from "react";
gsap.registerPlugin(ScrollTrigger);

function Portfolio() {
  const [state, setState] = useState("#frontend");

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
      <h2 className="portHeader portHeader_bottom">Portfolio</h2>
      <div className="filter_btns">
        <button
          onClick={() => setState("#frontend")}
          className={state === "#frontend" ? "btn btn-primary" : "btn"}
        >
          Front-end
        </button>
        <button
          onClick={() => {
            setState("#web2");
          }}
          className={state === "#web2" ? "btn btn-primary" : "btn"}
        >
          {" "}
          Web 2.0
        </button>
        <button
          onClick={() => setState("#web3")}
          className={state === "#web3" ? "btn btn-primary" : "btn"}
        >
          {" "}
          Web 3.0
        </button>
        <button
          onClick={() => setState("#uiux")}
          className={state === "#uiux" ? "btn btn-primary" : "btn"}
        >
          {" "}
          UI/UX design
        </button>
      </div>
      <div className="container portfolio_container" ref={portArticleRef}>
        {state === "#frontend" ? <Frontend /> : ""}
        {state === "#web2" ? <Web2 /> : ""}
        {state === "#web3" ? <Web3 /> : ""}
        {state === "#uiux" ? <UiUx /> : ""}
      </div>
      <h5 className=" portLower">More to Arrive here</h5>
    </section>
  );
}

export default Portfolio;
