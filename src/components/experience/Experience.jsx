import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

function Experience() {
  return (
    <section id="experience">
      <h5>What skills do I have</h5>
      <h2>Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_detail">
              <div className="skill_name">
                <BsPatchCheckFill className="experience_icon" />
                <h4>React</h4>
              </div>
              <small>Intermidiate</small>
            </article>
            <article className="experience_detail">
              <div className="skill_name">
                <BsPatchCheckFill className="experience_icon" />
                <h4>Javascript</h4>
              </div>
              <small>Experienced</small>
            </article>
            <article className="experience_detail">
              <div className="skill_name">
                <BsPatchCheckFill className="experience_icon" />
                <h4>Tailwind CSS</h4>
              </div>
              <small>Intermidiate</small>
            </article>
            <article className="experience_detail">
              <div className="skill_name">
                <BsPatchCheckFill className="experience_icon" />
                <h4>HTML5</h4>
              </div>
              <small>Experienced</small>
            </article>
            <article className="experience_detail">
              <div className="skill_name">
                <BsPatchCheckFill className="experience_icon" />
                <h4>CSS</h4>
              </div>
              <small>Experienced</small>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_detail">
              <div className="skill_name">
                <BsPatchCheckFill className="experience_icon" />
                <h4>Solidity</h4>
              </div>
              <small>Experienced</small>
            </article>
            <article className="experience_detail">
              <div className="skill_name">
                <BsPatchCheckFill className="experience_icon" />
                <h4>Hardhat</h4>
              </div>
              <small>Intermidiate</small>
            </article>
            <article className="experience_detail">
              <div className="skill_name">
                <BsPatchCheckFill className="experience_icon" />
                <h4>Python</h4>
              </div>
              <small>Experienced</small>
            </article>
            <article className="experience_detail">
              <div className="skill_name">
                <BsPatchCheckFill className="experience_icon" />
                <h4>Django</h4>
              </div>
              <small>Intermidiate</small>
            </article>
            <article className="experience_detail">
              <div className="skill_name">
                <BsPatchCheckFill className="experience_icon" />
                <h4>Remix IDE</h4>
              </div>
              <small>Experienced</small>
            </article>
          </div>
        </div>
        <div className="experience_design">
          <h3>UI/UX</h3>
          <div className="experience_content">
            <article className="experience_detail">
              <div className="skill_name">
                <BsPatchCheckFill className="experience_icon" />
                <h4>User Interface</h4>
              </div>
              <small>Experienced</small>
            </article>
            <article className="experience_detail">
              <div className="skill_name">
                <BsPatchCheckFill className="experience_icon" />
                <h4>User Experience</h4>
              </div>
              <small>Experienced</small>
            </article>
            <article className="experience_detail">
              <div className="skill_name">
                <BsPatchCheckFill className="experience_icon" />
                <h4>Figma</h4>
              </div>
              <small>Experienced</small>
            </article>
            <article className="experience_detail">
              <div className="skill_name">
                <BsPatchCheckFill className="experience_icon" />
                <h4>Adobe XD</h4>
              </div>
              <small>Intermidiate</small>
            </article>
            <article className="experience_detail">
              <div className="skill_name">
                <BsPatchCheckFill className="experience_icon" />
                <h4>Photoshop</h4>
              </div>
              <small>Experienced</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
