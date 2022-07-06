const mongoose = require("mongoose");

let Employee = new mongoose.Schema({
  name: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    default: "",
  },
});

let employee = new mongoose.model("Employee", Employee);
module.exports = employee;
