const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://not7that:not7that@cluster0.k4qor.mongodb.net/fastor?retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("DB connected successfully");
    }
  }
);
