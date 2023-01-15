import React from "react";
import "./about.css";
import ME from "../../assets/assets/me-about.jpg";

function About() {
  return (
    <section id="about">
      <h5>Want to know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <img src={ME} alt="" />
        <div className="about_me_text">
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nemo
            id veritatis sint inventore iste laudantium ullam eaque a deleniti.
          </h5>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            voluptates nobis adipisci corrupti eligendi placeat.
          </h5>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quae
            consequuntur nam dolore porro? Atque minima distinctio nostrum,
            tempora nemo dolorum amet blanditiis itaque sed error at voluptates
            commodi?
          </h5>

          <h5>Lorem ipsum dolor sit amet consectetur.</h5>

          <a href="#contact" className="btn btn-primary">
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
