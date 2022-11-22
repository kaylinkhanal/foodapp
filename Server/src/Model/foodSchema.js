const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema(
    {
        foodType: {type: String, required: true},
        restaurant: {type: String, required: true},
        isNonVeg: {type: String, required: true},
    },
    {
        collection: "Foods"
    }
)
const foodModel = mongoose.model("foodModel", foodSchema);
module.exports= foodModel