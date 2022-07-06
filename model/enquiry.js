const mongoose = require("mongoose");

let Enquiry = new mongoose.Schema({
  name: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    default: "",
  },
  course_intrest: {
    type: String,
    default: "",
  },
  time: {
    type: String,
    default: "",
  },
  claimed: {
    type: String,
    default: false,
  },
  counsellor: {
    type: String,
    default: null,
  },
});

let enquiry = new mongoose.model("Enquiry", Enquiry);
module.exports = enquiry;
