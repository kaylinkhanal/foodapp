
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 4000;
require("dotenv").config();

const connect = require("./db/mongoose");
connect();

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}))
const registerRouter = require("./Controller/registerRouter");
const loginRouter = require("./Controller/loginRouter");
const restroRouter = require("./Controller/restaurantRouter");
const foodRouter = require("./Controller/foodRouter");
app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.use("/restaurant", restroRouter);
app.use("/foods", foodRouter);

app.listen(PORT, () => {
  console.log(`Chat Server listening on port ${PORT}`);
});
