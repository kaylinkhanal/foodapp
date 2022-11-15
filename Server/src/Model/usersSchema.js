const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema(
    {
      name: { type: String, unique: true },
    },
    {
      collection: "Users",
    }
  );
  const usersModel = mongoose.model("usersModel", usersSchema);
  module.exports= usersModel