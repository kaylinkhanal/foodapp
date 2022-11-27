
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
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
app.use("/food", foodRouter);

app.listen(process.env.PORT, () => {
  console.log(`Foodapp Server listening on port ${process.env.PORT}`);
});
