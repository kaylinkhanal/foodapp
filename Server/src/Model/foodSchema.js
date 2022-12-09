const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema(
    {
        foodType: {type: String, },
        restaurant: {type: String,},
        foodCategory: {type: String,},
        foodImage: {type: String,},
        FoodName: {type: String,},
        FoodPrice: {type: String,},
        
    },
    {
        collection: "Foods"
    }
)
const foodModel = mongoose.model("foodModel", foodSchema);
module.exports= foodModel