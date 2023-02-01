import React, { useRef, useEffect } from "react";

import CTA from "./CTA";
import "./header.css";
import HeaderSocials from "./HeaderSocials";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

function Header({ timeline, ease }) {
  // let hello = useRef(null);
  // let name = useRef(null);
  // let under_name = useRef(null);
  // useEffect(() => {
  //   timeline.from(hello, 1, {
  //     opacity: 0,
  //     y: "50",
  //   });
  //   timeline.to(hello, 1, {
  //     opacity: 1,
  //     y: 0,
  //   });
  //   timeline.from([name, under_name], 1, {
  //     opacity: 0,
  //     y: "50",
  //     stagger: {
  //       amount: 0.5,
  //     },
  //     ease: ease,
  //   });
  //   timeline.to([name, under_name], 1, {
  //     opacity: 1,
  //     y: 0,
  //     stagger: {
  //       amount: 0.5,
  //     },
  //     ease: ease,
  //   });
  // });
  return (
    <header>
      <div className="container header_container">
        <div className="main_container">
          <div className="heading">
            <h5 className="hello">Hello I'm</h5>
            <h1 className="name">Adarsh More</h1>
            <h5 className="text-light under_name">
              Blockchain Developer | Fullstack Developer
            </h5>
          </div>
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

export default Header;
