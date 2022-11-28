const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        location: {type: String, required: true},
        rating: {type: Number},
        category: {type: String, required: true},
    },
    {
        collection: "Restaurants"
    }
)
const restaurantModel = mongoose.model("restroModel", restaurantSchema);
module.exports= restaurantModel