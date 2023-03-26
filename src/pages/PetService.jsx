import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import "../styles/PetServices.css";

//image imports
import bodyWash from "../images/petservice/bodywash.jpg";
import nailclip from "../images/petservice/nailclip.jpg";
import earclean from "../images/petservice/earclean.jpg";
import teethclean from "../images/petservice/teethclean.jpg";
import flea from "../images/petservice/flea.jpg";
import haircut from "../images/petservice/haircut.jpeg";
import grooming from "../images/petservice/grooming.jpg";
import sitting from "../images/petservice/sitting.jpg";
import walking from "../images/petservice/walking.jpg";
import petimg from "../images/petservice/petimg.jpg";


const petServicedata = [
  {
    heading: "Body Wash",
    description:
      "Our body wash service includes a relaxing bath with natural shampoos and conditioners to leave your pet's coat clean and shiny.",
    image: bodyWash,
  },
  {
    heading: "Nail Clipping",
    description:
      "We'll trim your pet's nails to keep them at a healthy length and prevent discomfort or injury.",
    image: nailclip,
  },
  {
    heading: "Ear Cleaning",
    description:
      "We'll clean your pet's ears to prevent infections and keep them smelling fresh.",
    image: earclean,
  },
  {
    heading: "Teeth Cleaning",
    description:
      "We'll clean your pet's teeth to prevent dental disease and keep their breath fresh.",
    image: teethclean,
  },
  {
    heading: "Flea and Tick Treatment",
    description:
      "We'll give your pet a flea and tick treatment to prevent infestations and keep them comfortable.",
    image: flea,

  },
  {
    heading: "Haircut",
    description:
      "We'll give your pet a haircut to keep them cool and comfortable in hot weather and prevent matting.",
    image: haircut,
  },
  {
    heading: "Grooming",
    description:
      "We offer a full grooming service including bathing, nail clipping, ear cleaning, and haircutting to keep your pet looking and feeling great.",
    image: grooming,
  },
  {
    heading: "Pet Sitting",
    description:
      "We offer a pet sitting service to provide your pet with love and attention while you're away.",
    image: sitting,
  },
  {
    heading: "Dog Walking",
    description:
      "We offer a dog walking service to give your pet the exercise they need to stay healthy and happy.",
    image: walking,
  },
  {
    heading: "Pet Photography",
    description:
      "We offer a pet photography service to capture beautiful photos of your furry friend.",
    image: petimg,
  },
];
function PetService() {
  const [click, setClick] = React.useState(false);

  return (
    <div className="pet-service">
      <div class="header">
        <h1>Pet Services</h1>
      </div>
      <div class="services">
        {petServicedata.map((service) => (
          <div
            class="service-card"
            onClick={() => setClick(!click)}
          >
            {click ? (
              <img src={service.image} className="service-img" alt="service" />
            ) : (
              <>
                <h2>{service.heading}</h2>
                <p>{service.description}</p>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="back">
        <Link className="btn btn-dark px-5 back-btn" to="/">
          <IoMdArrowRoundBack />
        </Link>
      </div>
    </div>
  );
}

export default PetService;
