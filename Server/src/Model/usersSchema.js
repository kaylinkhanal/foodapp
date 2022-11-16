const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema(
    {
      Name: { type: String, unique: true },
      phoneNumber: { type: Number },
      address: { type: String },
      email: { type: String },
      password: { type: String, unique: true },
      confirmPassword: { type: String, unique: true },
    },
    {
      collection: "Users",
    }
  );
  const usersModel = mongoose.model("usersModel", usersSchema);
  module.exports= usersModel