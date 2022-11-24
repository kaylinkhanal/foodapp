const express = require("express");
const Restaurant = require('../Model/restaurantsSchema')
const router = express.Router();

// post request for register the restaurant
router.post("/", async (req, res) => {
    try{
        console.log(req.body)
        const registeredRestaurant = await Restaurant.create(req.body)
       res.json({
        message: 'Restaurant Registered'
       })
    }catch(error){
        console.log(error)
    }
});


// view restaurants
router.get("/", async (req, res) => {
    try{
    const restaurantsList = await Restaurant.find()
       res.json({
        restaurantsList: restaurantsList
       })
    }catch(error){
        console.log(error)
    }
});

module.exports = router;