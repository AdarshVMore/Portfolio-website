import React from "react";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

function HeaderSocials() {
  return (
    <div className="header_socials">
      <a href="https://github.com/AdarshVMore" target="blank">
        <BsGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/adarsh-more-08124a223/"
        target="blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://twitter.com/Adarsh_VMore" target="blank">
        <BsTwitter />
      </a>
    </div>
  );
}

export default HeaderSocials;
