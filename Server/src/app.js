
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
const userRouter = require("./Controller/userRouter");
app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.use("/restaurant", restroRouter);
app.use("/foods", foodRouter);
app.use("/users", userRouter);

const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server, {
    pingTimeout: 30000,
    cors: {
      origin: '*',
    }
  });


  io.on('connection', socket => {
    socket.on('ordersRequest', orders => {
      io.emit('orders', orders) 
    });
  });

server.listen(PORT, () => {
  console.log(`Chat Server listening on port ${PORT}`);
});
