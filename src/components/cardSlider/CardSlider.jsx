import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./cardslider.css";

import { AiFillStar } from "react-icons/ai";

import u1 from "../../images/customer/u1.jpeg";
import u2 from "../../images/customer/u2.jpeg";
import u3 from "../../images/customer/u3.jpeg";
import u4 from "../../images/customer/u4.jpeg";
import u5 from "../../images/customer/u5.jpeg";
import u6 from "../../images/cat.jpg";

const CardSlider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div className="card poodal-card">
          <img
            src={u1}
            className="card-img-top poodal-card-img-top"
            alt="..."
          />
          <div className="card-body poodal-card-body">
            <p className="card-text poodal-card-text">
              I am extremely happy with the services provided by your pet
              service web application. The booking process is easy and
              hassle-free, and the staff is extremely friendly and
              knowledgeable. My dog loves spending time with their pet sitters,
              and I feel at ease knowing that he is in good hands.
            </p>
            <span>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </span>
          </div>
        </div>
        <div className="card poodal-card">
          <img
            src={u2}
            className="card-img-top poodal-card-img-top"
            alt="..."
          />
          <div className="card-body poodal-card-body">
            <p className="card-text poodal-card-text">
              I recently used your web application to book a grooming
              appointment for my cat, and I was impressed with the level of
              service I received. The groomers were gentle and patient with my
              cat, and they did an excellent job of grooming him. I will
              definitely be using your web application again in the future.
            </p>
            <span>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </span>
          </div>
        </div>
        <div className="card poodal-card">
          <img
            src={u3}
            className="card-img-top poodal-card-img-top"
            alt="..."
          />
          <div className="card-body poodal-card-body">
            <p className="card-text poodal-card-text">
              Your pet service web application has been a lifesaver for me. I
              travel frequently for work, and it can be difficult to find
              reliable pet sitters. Your web application makes it easy to book
              pet sitters in advance, and I have been extremely happy with the
              quality of service I have received
            </p>
            <span>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </span>
          </div>
        </div>
        <div className="card poodal-card">
          <img
            src={u4}
            className="card-img-top poodal-card-img-top"
            alt="..."
          />
          <div className="card-body poodal-card-body">
            <p className="card-text poodal-card-text">
              I have used your pet service web application several times now,
              and I am consistently impressed with the level of professionalism
              and care provided by your staff. They are always on time, and they
              take the time to get to know my pets and their individual needs. I
              would highly recommend your web application to anyone looking for
              quality pet services
            </p>
            <span>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </span>
          </div>
        </div>
        <div className="card poodal-card">
          <img
            src={u5}
            className="card-img-top poodal-card-img-top"
            alt="..."
          />
          <div className="card-body poodal-card-body">
            <p className="card-text poodal-card-text">
              i have been using your pet service web application for several
              months now, and I am extremely happy with the service. The staff
              is friendly and knowledgeable, and they go above and beyond to
              ensure that my pets are well taken care of. I appreciate the
              convenience of being able to book services online, and I would
              definitely recommend your web application to other pet owners.
            </p>
            <span>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </span>
          </div>
        </div>
        <div className="card poodal-card">
          <img
            src={u6}
            className="card-img-top poodal-card-img-top"
            alt="..."
          />
          <div className="card-body poodal-card-body">
            <p className="card-text poodal-card-text">
              I was a bit hesitant to use an online pet service, but I'm so glad
              I did! Poodals made it so easy to find and book a trusted pet
              sitter for my dog while I was away. The communication with the
              sitter was seamless and the updates and photos they sent me really
              put my mind at ease. I'll definitely be using Poodals again and
              recommending it to all my fellow pet owners!
            </p>
            <span>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </span>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default CardSlider;
