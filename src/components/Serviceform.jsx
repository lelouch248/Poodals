import React, { useState } from "react";

import Service from "./Service";
import "../styles/Loaders/typewrite.css";

function Serviceform() {
  const [loading, setLoading] = useState(false);

  const [values, setValues] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    petname: "",
    date: "",
    service: "",
    pettype: "",
  });

  const inputs = [
    {
      id: 1,
      label: "First name:",
      type: "text",
      name: "fname",
      errorMessage: "Please enter your first name",
      pattern: "[A-Za-z]{3,16}",
      required: true,
    },
    {
      id: 2,
      label: "Last name:",
      type: "text",
      name: "lname",
      errorMessage: "please enter your last name",
      pattern: "[A-Za-z]{1,16}",
      required: true,
    },
    {
      id: 3,
      label: "Email:",
      type: "email",
      name: "email",
      errorMessage: "Enter a valid email address",
      required: true,
    },
    {
      id: 4,
      label: "Phone:",
      type: "text",
      name: "phone",
      errorMessage: "Enter your phone number, only 10 digits",
      pattern: "[0-9]{10}",
      required: true,
    },
    {
      id: 5,
      label: "Pet name:",
      type: "text",
      name: "petname",
      errorMessage: "enter you pet name for booking of service",
      required: true,
    },

    {
      id: 6,
      label: "date",
      type: "date",
      name: "date",
      errorMessage: "please select a date",
      required: true,
    },
  ];
  const dropdown = [
    {
      id: 1,
      name: "service",
      label: "Service:",
      options: [
        {
          key: 1,
          id: 1,
          item: "Body Wash",
        },
        {
          key: 2,
          id: 2,
          item: "Nail Cut",
        },
        {
          key: 3,
          id: 3,
          item: "Hair Cut",
        },
        {
          key: 4,
          id: 4,
          item: "Grooming",
        },
        {
          key: 5,
          id: 5,
          item: "Ear Cleaning",
        },
        {
          key: 6,
          id: 6,
          item: "Teeth Cleaning",
        },
        {
          key: 7,
          id: 7,
          item: "Flea Treatment",
        },
        {
          key: 8,
          id: 8,
          item: "pet Sitting",
        },
        {
          key: 9,
          id: 9,
          item: "Dog Walking",
        },
        {
          key: 10,
          id: 10,
          item: "Pet Photography",
        },
      ],
      errorMessage: "please select a service",
    },
    {
      id: 2,
      name: "pettype",
      label: "Pet Type:",
      options: [
        {
          key: 1,
          id: 1,
          item: "Dog",
        },
        {
          key: 2,
          id: 2,
          item: "Cat",
        },
        {
          key: 3,
          id: 3,
          item: "Bird",
        },
        {
          key: 4,
          id: 4,
          item: "Fish",
        },
        {
          key: 5,
          id: 5,
          item: "Rabbit",
        },
        {
          key: 6,
          id: 6,
          item: "Horse",
        },
        {
          key: 7,
          id: 7,
          item: "Reptile",
        },
      ],
      errorMessage: "please select a pet type",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);

    await fetch("http://localhost:3001/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      alert("Booking saved");
    });

    setValues({
      fname: "",
      lname: "",
      email: "",
      phone: "",
      petname: "",
      date: "",
      service: "",
      pettype: "",
    });
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      {loading ? (
        <div className="typewriter">
          <div className="slide">
            <i></i>
          </div>
          <div className="paper"></div>
          <div className="keyboard"></div>
        </div>
      ) : (
        <div className="form-heading">
          <form onSubmit={handleSubmit} method="post" className="home-form">
            <>
              {inputs.map((input) => (
                <Service
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              ))}
            </>
            <div className="dropdown-input">
              {dropdown.map((dropdownitems) => (
                <select
                  className="form-control"
                  name={dropdownitems.name}
                  key={dropdownitems.id}
                  required={true}
                  style={{
                    width: "60%",
                    margin: "20px auto ",
                    height: "50px",
                  }}
                  onChange={onChange}
                >
                  <option value="select" disabled hidden>
                    Select a {dropdownitems.name}
                  </option>
                  {dropdownitems.options.map((option) => (
                    <option value={option.item} key={option.key}>
                      {option.item}
                    </option>
                  ))}
                </select>
              ))}
            </div>

            <button className="Submit-btn btn btn-dark" type="submit">
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default Serviceform;
