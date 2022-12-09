const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema(
    {
        name: {type: String, },
        location: {type: String, },
        rating: {type: Number},
        category: {type: String, },
    },
    {
        collection: "Restaurants"
    }
)
const restaurantModel = mongoose.model("restroModel", restaurantSchema);
module.exports= restaurantModel