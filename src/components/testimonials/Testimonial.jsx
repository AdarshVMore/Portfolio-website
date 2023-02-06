import React from "react";
import "./testimonial.css";
import AVTR1 from "../../assets/assets/avatar1.jpg";
import AVTR2 from "../../assets/assets/avatar2.jpg";
import AVTR3 from "../../assets/assets/avatar3.jpg";
import AVTR4 from "../../assets/assets/avatar4.jpg";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/all";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

gsap.registerPlugin(ScrollTrigger);

function Testimonial() {
  const reviews = [
    {
      img: AVTR1,
      name: "Unknown",
      review: "Be the First one to review my work ",
    },
    {
      img: AVTR2,
      name: "Unknown",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum non magni exercitationem iusto quo recusandae atque ullam! Molestias rem eveniet ratione quia porro unde possimus.",
    },
    {
      img: AVTR3,
      name: "Unknown",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum non magni exercitationem iusto quo recusandae atque ullam! Molestias rem eveniet ratione quia porro unde possimus.",
    },
    {
      img: AVTR4,
      name: "Unknown",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum non magni exercitationem iusto quo recusandae atque ullam! Molestias rem eveniet ratione quia porro unde possimus.",
    },
  ];

  const testimonialHeaderRef = useRef(null);
  const testimonialRef = useRef(null);

  useEffect(() => {
    const testimonialHeader = testimonialHeaderRef.current;
    const testimonial = testimonialRef.current;

    gsap.fromTo(
      ".testimonialHeading",
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
          trigger: testimonialHeader,
          start: "top 70%",
          end: "bottom 10%",
          toggleActions: "restart reverse restart reverse",
          // markers: true,
        },
      }
    );

    gsap.fromTo(
      ".testimonial_container",
      {
        opacity: 0,
        x: -15,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: testimonial,
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "restart reverse restart reverse",
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <div className="testimonials">
      <h5 className="testimonialHeading" ref={testimonialHeaderRef}>
        Reiview from my clients
      </h5>
      <h2 className="testimonialHeading" ref={testimonialHeaderRef}>
        Testimonials
      </h2>
      <Swiper
        ref={testimonialRef}
        className="container testimonial_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {reviews.map(({ img, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="article">
              <img src={img} alt="" />
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Testimonial;
