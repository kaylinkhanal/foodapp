const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema(
    {
        foodName: {type: String, required: true},
        foodCategory: {type: String, required: true},
        restaurantName: {type: String, required: true},
        foodType: {type: String},
        foodPrice: {type: Number, required: true},
        foodImage: {type: String}
    },
    {
        collection: "Foods"
    }
)
const foodModel = mongoose.model("foodModel", foodSchema);
module.exports= foodModel