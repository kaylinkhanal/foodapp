const mongoose = require('mongoose')

const restSchema = new mongoose.Schema(
    {
      name: { type: String },
      location: { type: String },
      rating: { type: String},
      restaurantCategory: { type: String},
    },
    {
      collection: "Restaurant",
    }
  );
  const restModel = mongoose.model("restModel", restSchema);
  module.exports= restModel