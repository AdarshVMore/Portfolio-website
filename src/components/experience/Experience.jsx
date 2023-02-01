import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

function Experience() {
  const expRef = useRef(null);

  useEffect(() => {
    const ex = expRef.current;

    gsap.fromTo(
      ".exp_header",
      {
        opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.2,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ex,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "restart reverse restart reverse",
          // markers: true,
        },
      }
    );

    gsap.fromTo(
      ".exp",
      {
        x: -100,
        opacity: 0,
      },
      {
        opacity: 1,
        x: 0,
        stagger: 0.1,
        duration: 0.5,
        scrollTrigger: {
          trigger: ex,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "restart reverse restart reverse",
          // markers: true,
        },
      }
    );
  });

  return (
    <section id="experience">
      <h5 className="exp_header">What skills do I have</h5>
      <h2 className="exp_header">Experience</h2>

      <div className="container experience_container" ref={expRef}>
        <div className="exp experience_frontend">
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
        <div className="exp experience_backend">
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
        <div className="exp experience_design">
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
