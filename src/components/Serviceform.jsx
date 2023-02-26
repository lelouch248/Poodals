import React, { useState } from "react";
import Service from "./Service";

function Serviceform() {
  const [values, setValues] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    petname: "",
    date: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);

    await fetch("http://localhost:3001/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then(()=>{alert("Booking saved")});



    setValues({
      fname: "",
      lname: "",
      email: "",
      phone: "",
      petname: "",
      date: "",
    });
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-heading">
      <form onSubmit={handleSubmit} method="post">
        {inputs.map((input) => (
          <Service
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className="Submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default Serviceform;
