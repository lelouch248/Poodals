import React from 'react';
import { FaPaw } from 'react-icons/fa';
import '../styles/Aboutus.css';

const AboutUsPage = () => {
  return (
      <div className="about-us-container">
      <div className="about-us-content">
        <h1 className="about-us-heading">About Us {FaPaw}</h1>
        <p className="about-us-description">
          We are a passionate team of pet lovers who have come together to offer top-quality pet services to our clients. Our mission is to provide a safe and nurturing environment for pets, where they can thrive and be happy.
        </p>
        <p className="about-us-description">
          We offer a wide range of services including pet grooming, pet daycare, pet boarding, and pet training. Our team consists of experienced professionals who are dedicated to providing the best care for your pets.
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;