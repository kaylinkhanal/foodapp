const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema(
    {
      name: { type: String,},
      phoneNumber: { type: Number },
      address: { type: String },
      role:{type:String},
      email: { type: String,unique: true },
      password: { type: String},
    },
    {
      collection: "Users",
    }
  );
  const usersModel = mongoose.model("usersModel", usersSchema);
  module.exports= usersModel