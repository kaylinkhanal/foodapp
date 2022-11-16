const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema(
    {
      firstName: { type: String, unique: true },
      lastName: { type: String, unique: true },
      phoneNumber: { type: String, unique: true },
      address: { type: String, unique: true },
      email: { type: String, unique: true },
      password: { type: String, unique: true },
      confrimPassword: { type: String, unique: true },


      

    },
    {
      collection: "Users",
    }
  );
  const usersModel = mongoose.model("usersModel", usersSchema);
  module.exports= usersModel