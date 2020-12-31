const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const dbConnect = require("./models/dbConnect");

// Server
const app = express();
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`I am listening on ${port}`);
});

//database connect
dbConnect();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
