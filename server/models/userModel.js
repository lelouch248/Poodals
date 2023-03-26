const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
    email: String,
    password: String,
    googleId: String,
    secret: String,
  });

  module.exports = mongoose.model("User", signupSchema);
