import React, { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import "../styles/Dashboard.css";
import moment from "moment";
import PdfDocument from "../components/genBooking/Booking";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

function Dashboard() {
  let count = 0;
  const fileName = "Booking.pdf";
  const [viewpdf, setViewpdf] = useState(false);

  const handleClick = () => {
    setViewpdf(true);
    setTimeout(() => {
      setViewpdf(false);
    }, 5000);
  };

  const [bookingData, setBookingData] = useState([{}]);
  useEffect(() => {
    fetch("http://localhost:3001/getBooking", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setBookingData(data.data);
      });
  }, []);
  return (
    <div className="dashboard-container">
      <h1>Welcome to the Dashboard of poodals </h1>
      <h3 className="text-center mb-4">Here are your Bookings </h3>
      {bookingData.map((item) => (
        <div className="bookings row align-items-center " key={count++}>
          <div className="left-details col-lg-6  col-sm-12">
            <p className="booking-name">
              <b> Booking Name: </b> {item.fname}
            </p>
            <p className="booking-email">
              <b>Email Id:</b> {item.email}
            </p>
            <p className="booking-number">
              <b>Phone No:</b> {item.phone}
            </p>
            <p className="booking-number">
              <b>Appoitment Date: </b>{" "}
              {(item.date = moment().format("D-MM-YYYY"))}
            </p>
          </div>
          <div className="col-lg-6  col-sm-12">
            <p className="booking-petname">
              <b>Pet Name:</b> {item.petname}
            </p>
            <p className="booking-pettype">
              <b>Pet Type:</b> {item.pettype}
            </p>
            <p className="booking-service">
              <b>Service:</b> {item.service}
            </p>
            <PDFDownloadLink
              document={<PdfDocument item={item} />}
              fileName={fileName}
            >
              {({ blob, url, loading, error }) =>
                loading ? "Loading..." : <p>{<FaDownload />} Download Pdf</p>
              }
            </PDFDownloadLink>
            {viewpdf ? (
              <PDFViewer width={800} height={500} showToolbar={false}>
                <PdfDocument item={item} />
              </PDFViewer>
            ):(
              <button className="btn btn-primary" onClick={handleClick}>View PDF</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
