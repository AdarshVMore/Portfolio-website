import React from "react";
import CTA from "./CTA";
import "./header.css";
import HeaderSocials from "./HeaderSocials";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

function header() {
  return (
    <header>
      <div className="container header_container">
        <div className="main_container">
          <h5>Hello I'm</h5>
          <h1>Adarsh More</h1>
          <h5 className="text-light">
            Blockchain Developer | Fullstack Developer
          </h5>
          <CTA />
        </div>
        <HeaderSocials />
        <div className="scroll">
          <a href="#contact" className="scroll_down">
            Scroll Down
          </a>
          <HiOutlineArrowNarrowRight />
        </div>
      </div>
    </header>
  );
}

export default header;
