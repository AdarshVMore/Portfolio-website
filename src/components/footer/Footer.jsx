import React from "react";
import "./footer.css";
import { BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";

function Footer() {
  return (
    <footer className=" footer_container">
      <a href="#">
        <h2>ADARSH MORE</h2>
      </a>
      <div className="nav_links">
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="socials_icons">
        <a href="">
          <BsFacebook />
        </a>
        <a href="https://www.instagram.com/adarsh_more19">
          <BsInstagram />
        </a>
        <a href="https://twitter.com/Adarsh_VMore" target="blank">
          <BsTwitter />
        </a>
      </div>
      <h5 className="copyright">&copy; Adarsh More all rights reserved </h5>
    </footer>
  );
}

export default Footer;
