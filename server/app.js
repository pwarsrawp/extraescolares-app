require("dotenv").config();
require("./db");
const express = require("express");
const app = express();
require("./config")(app);


const apiRoutes = require('./routes/router')
app.use("/api", apiRoutes);

app.post("/login", (req, res) => {
  res.json({ status: 200, message: "Login successful" });
});

require("./error-handling")(app);

module.exports = app;
