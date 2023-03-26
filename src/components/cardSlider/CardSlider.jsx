import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./cardSlider.css";
import { data } from "./data";
function CardSlider() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="CardSlider">
      <Slider {...settings}>
        {data.map((item) => (
          <div className="card">
            <div className="card-top">
              <img src={item.img} alt="{item.title}" />
              <h1>{item.title}</h1>
            </div>
            <div className="card-bottom">
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export { CardSlider };
