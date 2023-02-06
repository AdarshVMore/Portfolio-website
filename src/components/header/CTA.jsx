import React from "react";
import CV from "../../assets/assets/cv.pdf";

function CTA() {
  return (
    <div className="cta">
      <a href={CV} target="_blank" className="btn btn1" rel="noreferrer">
        Download CV
      </a>
      <a href="#contact" className=" btn btn-primary btn2">
        Let's Talk
      </a>
    </div>
  );
}

export default CTA;
