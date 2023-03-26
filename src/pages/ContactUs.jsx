import React from 'react';
import { FaFacebook, FaInstagram, FaDiscord, FaYoutube } from 'react-icons/fa';
import petImage from '../images/pet-img-1.jpeg';
import '../styles/ContactUs.css';

function ContactUs() {
  return (
    <div className="contact-us-container">
      <div className="greeting-card">
        <h1>Welcome to our Pet Services!</h1>
        <p>We'd love to hear from you. Get in touch with us through any of the following channels:</p>
      </div>
      <div className="social-media-links">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://discord.com/" target="_blank" rel="noopener noreferrer"><FaDiscord /></a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
      </div>
      <div className="contact-details">
        <p>Email: petservices@example.com</p>
        <p>Phone: 1-800-123-4567</p>
        <p>Twitter: @PetServices</p>
      </div>
      <img className="pet-image" src={petImage} alt="cute pet" />
    </div>
  );
}

export default ContactUs;
