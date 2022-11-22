const mongoose = require('mongoose')

const foodtypeSchema = new mongoose.Schema(
    {
        foodtype: { type: String },
        restaurant: { type: Number},
        foodcatogory: { type: String },
       
    },
    {
      collection: "cuisins",
    }
  );
  const foodtypeModel = mongoose.model("foodtypeModel", foodtypeSchema);
  module.exports= foodtypeModel