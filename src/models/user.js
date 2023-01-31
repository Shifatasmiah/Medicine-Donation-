//mongoose library required korte hobe
//validator library required korte hobe
const mongoose = require("mongoose");
const validator = require("validator");

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,

    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("password should not contain password string");
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a positive number");
      }
    },
  },
  Contact_number:{
    type:Number,
    required:true,
    trim:true,
  }
});

module.exports = User; // onno file jeno user model use korte pare ei jonno User name j function model cretae kora hoise seta export korte hobe.
