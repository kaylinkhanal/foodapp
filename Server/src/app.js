const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
require("dotenv").config();

const connect = require("./db/mongoose");
connect();

const registerRouter = require("./Controller/registerRouter");

app.use("/register", registerRouter);

app.listen(process.env.PORT, () => {
  console.log(`Chat Server listening on port ${process.env.PORT}`);
});
