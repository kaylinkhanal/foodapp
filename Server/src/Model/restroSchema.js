const mongoose = require('mongoose')

const restroSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        location: {type: String, required: true},
        rating: {type: Number},
        category: {type: String, required: true},
    },
    {
        collection: "Restaurant"
    }
)
const restroModel = mongoose.model("restroModel", restroSchema);
module.exports= restroModel