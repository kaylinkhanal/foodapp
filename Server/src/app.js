
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const connect = require("./db/mongoose");
connect();

app.use(cors());//The client and server have a different origin from each other, i.e., accessing resources from a different server. In this case, trying to make a request to a resource on the other server will fail. So, using cors will helps to aceess resources from different server.
app.use(bodyParser.json());//app.use(bodyParser.json()) basically tells the system that you want json to be used.
app.use(express.urlencoded({extended:true}))//bodyParser.urlencoded({extended: ...}) basically tells the system whether you want to use a simple algorithm for shallow parsing (i.e. false) or complex algorithm for deep parsing that can deal with nested objects (i.e. true).
const registerRouter = require("./Controller/registerRouter");
const loginRouter = require("./Controller/loginRouter");
const restroRouter = require("./Controller/restaurantRouter");
const foodRouter = require("./Controller/foodRouter");
app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.use("/restaurant", restroRouter);
app.use("/foods", foodRouter);

app.listen(process.env.PORT, () => {
  console.log(`Foodapp Server listening on port ${process.env.PORT}`);
});