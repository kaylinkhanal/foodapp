const mongoose = require("mongoose");
const appConfig = require("../../config/app-config.json");
const connectionString = appConfig.uri;
const connect = async () => {
  try {
    mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to mongodb");
  } catch (error) {
    console.error(error);
  }
<<<<<<< HEAD
};
module.exports = connect;
=======
  

  module.exports= connect
>>>>>>> 6658e91da6540ddab35693bf4cbcf8a5cbcdafed
