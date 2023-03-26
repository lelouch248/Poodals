import React from "react";
import {FaPaw} from 'react-icons/fa';

import "../styles/Poodals.css";
import image1 from "../images/cat.jpg";
import image2 from "../images/pet-img-1.jpeg";





function Poodals() {
  return (
    <div className="poodals-container">
      <h1>Poodals</h1>
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
          <a href="/#" className="">Know More <FaPaw/></a>
          </div>
        </div>
        <div className="col  story-img">
          <img src={image1} alt="cat" className=" img1" />
          <img src={image2} alt="dog" className=" img2" />
        </div>
      </div>
      <div className="our-values">
      <h2>Our </h2>
          <br />
          <h2>
            <b>Story</b>
          </h2>
          <hr />
      </div>
    </div>
  );
}

export default Poodals;
