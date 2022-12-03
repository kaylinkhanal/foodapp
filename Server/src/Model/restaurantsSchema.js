const mongoose = require('mongoose')

const restaurantsSchema = new mongoose.Schema(
    {
      name: { type: String },
      location: { type: String },
      rating: { type: String },
      category: { type: String },
      
    },
    {
      collection: "Restaurants",
    }
  );
  const restaurantsModel = mongoose.model("restaurantsModel", restaurantsSchema);
  module.exports= restaurantsModel