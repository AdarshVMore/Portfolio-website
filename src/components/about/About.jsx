import React from "react";
import "./about.css";
import ME from "../../assets/assets/zport1.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

function About() {
  const imgRef = useRef(null);
  const textRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const el = imgRef.current;
    const text = textRef.current;
    const header = headerRef.current;

    gsap.fromTo(
      ".about_header",
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
          trigger: header,
          start: "top 70%",
          end: "bottom 10%",
          toggleActions: "restart reverse restart reverse",
          // markers: true,
        },
      }
    );
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 0.7,
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "restart reverse restart reverse",
          // markers: true,
        },
      }
    );
    gsap.fromTo(
      ".about_me_text h5",
      {
        opacity: 0,
        x: 30,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: {
          each: 0.3,
        },
        scrollTrigger: {
          trigger: text,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "restart reverse restart reverse",
          // markers: true,
        },
      }
    );
    gsap.fromTo(
      ".about_me_text h3",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: text,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "restart reverse restart reverse",
          // markers: true,
        },
      }
    );
  });

  return (
    <section id="about">
      <h5 className="about_header" ref={headerRef}>
        Want to know
      </h5>
      <h2 className="about_header" ref={headerRef}>
        About Me
      </h2>
      <div className="container about_container">
        <img src={ME} alt="" ref={imgRef} />
        <div className="about_me_text" ref={textRef}>
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
