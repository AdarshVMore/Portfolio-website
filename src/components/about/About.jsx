import React from "react";
import "./about.css";
import ME from "../../assets/assets/zport1.jpg";

function About() {
  return (
    <section id="about">
      <h5>Want to know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <img src={ME} alt="" />
        <div className="about_me_text">
          <h5>
            After exploring bunch of different Designing Domains
            <span> I Started my programming journey in 2021</span>
          </h5>

          <h5>
            Actually <span>I am a second Year Computer Science student</span> at
            Mumbai University GIT college
          </h5>
          <h5>
            But
            <span>
              {" "}
              I am Self taught with 2 years of programming experience{" "}
            </span>
            and ready to build the Next Unicorn
          </h5>

          <h5>Learnt everything from YouTube and Google</h5>

          <h5>
            Built Bunch of different Orignal Projects using my Web development
            skills and yet now <span>Building some awesome WEB 3 projects</span>
          </h5>

          <h5>
            Always updated with new designing and coding tech and tool in the
            market
          </h5>

          <h5>
            I am <span>in LOVE with Building stuff</span> from scratch Man!!
            Trust me
          </h5>

          <h3 className="test1">
            <span>LET'S TURN YOUR IDEA INTO A PRODUCT</span>
          </h3>

          <a href="#contact" className="btn btn-primary">
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
