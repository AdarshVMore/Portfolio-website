import React from "react";
import P1 from "../../../assets/assets/Web3_1.png";
import P2 from "../../../assets/assets/Web3_2.png";
function Web3() {
  return (
    <div className=" portfolio_container">
      <article className="portfolio_article">
        <div className="portfolio_img">
          <img src={P1} alt="" />
        </div>
        <h5>Health on Chain</h5>
        <div>
          <a
            href="https://github.com/AdarshVMore/hospital_dapp"
            className="btn"
            target="_blank"
          >
            Github
          </a>
          <a
            href="https://healthonchain.netlify.app/"
            className=" btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
        </div>
      </article>
      <article className="portfolio_article">
        <div className="portfolio_img">
          <img src={P2} alt="" />
        </div>
        <h5>Ettara</h5>
        <div>
          <a
            href="https://github.com/AdarshVMore/DJCSI_CodeNChill"
            className="btn"
            target="_blank"
          >
            Github
          </a>
          <a href="https://ettarra.netlify.app/" className=" btn btn-primary">
            Live Demo
          </a>
        </div>
      </article>
    </div>
  );
}

export default Web3;
