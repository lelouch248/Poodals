require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors" );
const cookieSession = require("cookie-session");
const passport = require("passport");
// eslint-disable-next-line no-unused-vars
const passportSetup = require("./passport");
const authRoute = require("./routes/auth");
const app = express();
mongoose.set("strictQuery", true);

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
app.use("/auth",authRoute);
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

app.use("/auth",authRoute);

app.get('/logout', function(req, res, next){
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/signin');
  });
});




app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
