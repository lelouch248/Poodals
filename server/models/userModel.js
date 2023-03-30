const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
  username: String,
  password: String,
  });

  module.exports = mongoose.model("User", signupSchema);
