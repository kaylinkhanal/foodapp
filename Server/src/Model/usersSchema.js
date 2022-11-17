const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema(
    {
      full_name: { type: String },
      phone: { type: Number },
      address: { type: String },
      email: { type: String },
      role: { type: String },
      password: { type: String },
    },
    {
      collection: "Users",
    }
  );
  const usersModel = mongoose.model("usersModel", usersSchema);
  module.exports= usersModel