const express = require("express");
require("dotenv").config();
require("./config/config");
const routes = require("./routes/index");

const app = express();
const Port = process.env.PORT;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", routes);

// create a server instance
app.listen(Port, () => {
  console.log("server started at port " + Port);
});
