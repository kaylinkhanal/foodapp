const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const connect = require("./db/mongoose");
connect();

app.use(cors());
app.use(bodyParser.json());
const registerRouter = require("./Controller/registerRouter");
app.use("/register", registerRouter);

app.listen(process.env.PORT, () => {
  console.log(`Chat Server listening on port ${process.env.PORT}`);
});
