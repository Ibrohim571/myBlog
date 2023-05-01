const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is empty"],
  },
  email: {
    type: String,
    required: [true, "Email is empty"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is empty"],
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
