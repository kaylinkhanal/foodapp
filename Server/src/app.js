const express = require("express");
const app = express();
const port = 4000
const bodyParser = require("body-parser");
const corsOptions ={
  origin:'*', 
  credentials:true,  
  optionSuccessStatus:200,
}
app.use(cors());
app.use(bodyParser.json());
require("dotenv").config();

const uri = 'mongodb://localhost:27017/foodDelivery'
const connect=async()=>{
  try{
      mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
      console.log("connected to mongodb");
  }catch(error){
      console.error(error);
  }
}
connect()

const registerRouter = require("./Controller/registerRouter");

app.use("/register", registerRouter);

app.listen(process.env.PORT, () => {
  console.log(`Chat Server listening on port ${process.env.PORT}`);
});
