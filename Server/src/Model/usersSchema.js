const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema(
    {
      firstName: { type: String },
      lastName: { type: String },
      phoneNumber: { type: String},
      address: { type: String },
      email: { type: String},//email should be unique
      password: { type: String},
      confrimPassword: { type: String },
    },
    {
      collection: "Users",
    }
  );
  const usersModel = mongoose.model("usersModel", usersSchema);
  module.exports= usersModel