const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose
  .connect(
    "mongodb+srv://Karthik:karthik@cluster0.fohsgzm.mongodb.net/bookingdb",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

// model schema for booking
const bookingSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  phone: String,
  petname: String,
  date: Date,
});
// // model creation for booking
const BookingModel = mongoose.model("Booking", bookingSchema);

app.post("/", (req, res) => {
  const booking = new BookingModel({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    phone: req.body.phone,
    petname: req.body.petname,
    date: req.body.date,
  });
  booking.save((err, booking) => {
    if (err) {
      console.log(err);
    } else {
      console.log(booking);
    }
  });
  res.send("Booking saved");
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
