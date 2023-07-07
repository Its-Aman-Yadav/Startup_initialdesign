const express = require("express");
const bodyParser = require("body-parser");
const contactRoutes = require("./routes/contact");

const app = express();

app.use(bodyParser.json());
app.use("/api/contact", contactRoutes);

module.exports = app;
