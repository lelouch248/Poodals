require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bcrypt = require("bcrypt");
// eslint-disable-next-line no-unused-vars
const passportSetup = require("./passport");
const authRoute = require("./routes/auth");
const app = express();
mongoose.set("strictQuery", true);

//import user model from models/userModel.js
const User = require("./models/userModel");
// all app.use() must be before the routes
app.use(
  cookieSession({
    name: "session",
    keys: ["poodals"],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours calculated in milliseconds
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: "GET, POST, PUT,DELETE",
  })
);
app.use("/auth", authRoute);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//mongoose connection
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
  service: String,
  pettype: String,
  date: Date,
});

// // model creation for booking
const BookingModel = new mongoose.model("Booking", bookingSchema);

app.get("/", (req, res) => {
  res.redirect("/");
});

app.post("/", (req, res) => {
  const booking = new BookingModel({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    phone: req.body.phone,
    petname: req.body.petname,
    date: req.body.date,
    service: req.body.service,
    pettype: req.body.pettype,
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

app.get("/getBooking", async (req, res) => {
  try {
    const allBookings = await BookingModel.find({});
    res.send({ status: "ok", data: allBookings });
  } catch (error) {}
});

app.use("/auth", authRoute);

app.get("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/signin");
  });
});

app.post("/signup", (req, res) => {
  try {
    const hashedPassword = bcrypt.hashSync(req.body.password, 8);
    const user = new User({
      username: req.body.username,
      password: hashedPassword,
    });
    user.save((err, user) => {
      if (err) {
        console.log(err);
      } else {
        console.log(user);
      }
    });
    res.send("user has been saved to the database");
    res.redirect("/signin");
  } catch {
    res.redirect("/signup");
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
