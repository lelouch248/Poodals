import React from "react";
import { FaPaw } from "react-icons/fa";

import "../styles/Poodals.css";
import image1 from "../images/cat.jpg";
import image2 from "../images/pet-img-1.jpeg";
import poodal from "../images/poodal.png";

import trust from "../images/trust.png";
import satisfaction from "../images/satisfaction.png";
import convinient from "../images/convenient.png";
import CardSlider from "../components/cardSlider/CardSlider";

function Poodals() {
  return (
    <div className="poodals-container">
      <h1 className="mt-3">Poodals</h1>
      <h3 className="subheading">
        <b>Paw</b>sible <b>purr</b>fection
      </h3>
      <div className="poodal-img">
        <img src={poodal} alt="poodal" />
      </div>
      <div className="row our-story justify-content-md-center">
        <div className="col our-story-body ">
          <h2>Our </h2>
          <br />
          <h2>
            <b>Story</b>
          </h2>
          <hr />
          <p>
            The journey of Poodals began with extensive market research and user
            testing to understand the needs and preferences of pet owners. The
            founders worked closely with industry experts to develop the
            application and ensure that it meets the highest standards in terms
            of quality and user experience. Since its launch, Poodals has gained
            a large following of satisfied customers who have praised the
            platform for its convenience, affordability, and reliability.
            Poodals continues to grow and expand its services to meet the needs
            of pet owners everywhere.
          </p>
          <div className="know-more">
            <a href="/#" className="">
              Know More <FaPaw />
            </a>
          </div>
        </div>
        <div className="col  story-img">
          <img src={image1} alt="cat" className=" img1" />
          <img src={image2} alt="dog" className=" img2" />
        </div>
      </div>
      <div className="our-values">
        <h2>Our </h2>
        <h2>
          <b>values</b>
        </h2>
        <hr />
        <div className="bg-heart"></div>
        <div className="row values ">
          <div className="col value-item">
            <img src={trust} alt="trust" className="values-img" />
            <h3>Trust</h3>
          </div>
          <div className="col value-item">
            <img src={satisfaction} alt="satisfaction" className="values-img" />
            <h3>Satisfaction</h3>
          </div>
          <div className="col value-item">
            <img src={convinient} alt="convinient" className="values-img" />
            <h3>Convinient</h3>
          </div>
        </div>
      </div>
      <div className="card-slider">
        <h2>What our customers say</h2>
        <CardSlider />
      </div>
    </div>
  );
}

export default Poodals;
