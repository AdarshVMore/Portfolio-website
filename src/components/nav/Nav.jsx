import React from "react";
import "./nav.css";
import { AiFillHome, AiOutlineUser } from "react-icons/ai";
import { BiBookAlt, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceFill } from "react-icons/ri";
import { MdContactPage } from "react-icons/md";
import { useState } from "react";

function Nav() {
  const [state, setActive] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActive("#")}
        className={state === "#" ? "active" : ""}
      >
        <AiFillHome />
      </a>
      <a
        href="#about"
        onClick={() => setActive("#about")}
        className={state === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActive("#experience")}
        className={state === "#experience" ? "active" : ""}
      >
        <BiBookAlt />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActive("#portfolio")}
        className={state === "#portfolio" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
      <a
        href="#contact"
        onClick={() => setActive("#contact")}
        className={state === "#contact" ? "active" : ""}
      >
        <MdContactPage />
      </a>
    </nav>
  );
}

export default Nav;
