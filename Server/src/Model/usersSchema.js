const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
      phoneNumber: { type: Number, required: true },
      address: { type: String, required: true },
      email: { type: String, required: true },
      role: {type: String, required: true},
      password: { type: String, required: true },
    },
    {
      collection: "Users",
    }
  );
  const usersModel = mongoose.model("usersModel", usersSchema);
  module.exports= usersModel