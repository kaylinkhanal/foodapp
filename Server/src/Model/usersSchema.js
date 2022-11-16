const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema(
    {
<<<<<<< HEAD
      firstName: { type: String },
      lastName: { type: String },
      phoneNumber: { type: String},
      address: { type: String },
      email: { type: String},//email should be unique
      password: { type: String},
      confrimPassword: { type: String },
=======
      name: { type: String, required: true },
      phoneNumber: { type: Number, unique: true },
      address: { type: String, required: true },
      email: { type: String, required: true },
      password: { type: String, required: true },
      confirmPassword: { type: String, required: true },
>>>>>>> 1f802ac609b7042d8065b377e0fce8cd928f566a
    },
    {
      collection: "Users",
    }
  );
  const usersModel = mongoose.model("usersModel", usersSchema);
  module.exports= usersModel