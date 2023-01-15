import React from "react";
import "./testimonial.css";
import AVTR1 from "../../assets/assets/avatar1.jpg";
import AVTR2 from "../../assets/assets/avatar2.jpg";
import AVTR3 from "../../assets/assets/avatar3.jpg";
import AVTR4 from "../../assets/assets/avatar4.jpg";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Testimonial() {
  const reviews = [
    {
      img: AVTR1,
      name: "Adarsh More",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum non magni exercitationem iusto quo recusandae atque ullam! Molestias rem eveniet ratione quia porro unde possimus.",
    },
    {
      img: AVTR2,
      name: "Adarsh More",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum non magni exercitationem iusto quo recusandae atque ullam! Molestias rem eveniet ratione quia porro unde possimus.",
    },
    {
      img: AVTR3,
      name: "Adarsh More",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum non magni exercitationem iusto quo recusandae atque ullam! Molestias rem eveniet ratione quia porro unde possimus.",
    },
    {
      img: AVTR4,
      name: "Adarsh More",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum non magni exercitationem iusto quo recusandae atque ullam! Molestias rem eveniet ratione quia porro unde possimus.",
    },
  ];
  return (
    <div className="testimonials">
      <h5>Reiview from my clients</h5>
      <h2>Testimonials</h2>
      <Swiper
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
