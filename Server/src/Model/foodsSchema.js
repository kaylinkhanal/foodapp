const mongoose = require('mongoose')

const foodsSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    // name: {type: String, required: true},
},
{
    collection: 'Foods'
})

const Food = mongoose.model('foodsModel', foodsSchema);

module.exports = Food;