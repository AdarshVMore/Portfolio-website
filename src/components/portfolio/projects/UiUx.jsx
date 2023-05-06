import React from "react";
import P1 from "../../../assets/assets/portfolio1.png";
import P2 from "../../../assets/assets/Web3_1.png";
import P3 from "../../../assets/assets/portfolio3.png";
function UiUx() {
  return (
    <div className="portfolio_container">
      <article className="portfolio_article">
        <div className="portfolio_img">
          <img src={P1} alt="" />
        </div>
        <h5>Portfolio Website</h5>
        <div>
          <a
            href="https://www.figma.com/file/ELqzvXtzEDzMkJQbM6WVn8/Untitled?type=design&node-id=0%3A1&t=zcF4Nhi3Csbagbdb-1"
            className="btn"
            target="_blank"
          >
            Figma
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
            href="https://www.figma.com/proto/u2iStDtnF5G2ZMkepgc1Kn/Untitled?node-id=0-3&starting-point-node-id=0%3A3"
            className="btn"
            target="_blank"
          >
            Figma
          </a>
          <a href="" className=" btn btn-primary" target="_blank">
            Live Demo
          </a>
        </div>
      </article>
      <article className="portfolio_article">
        <div className="portfolio_img">
          <img src={P2} alt="" />
        </div>
        <h5>Health on Chain</h5>
        <div>
          <a
            href="https://www.figma.com/file/nBeW708usIveltXSVUuHUV/Untitled?type=design&node-id=0-1&t=hHKlvxXpdf9yCIEq-0"
            target="_blank"
            className="btn"
          >
            Figma
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

export default UiUx;
