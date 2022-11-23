const express = require("express");
const Foods = require("../Model/foodSchema");
// const Restaurant = require('../Model/restaurantsSchema')
const router = express.Router();

// post request for register the restaurant
router.post("/", async (req, res) => {
    try{
        console.log(req.body)
        const registeredFood = await Foods.create(req.body)
       res.send({
        message: 'Food Registered'
       })
    }catch(error){
        console.log(error)
    }
});


// view restaurants
router.get("/", async (req, res) => {
    try{
    const foodList = await Foods.find()
       res.send({
        foodList: foodList
       })
    }catch(error){
        console.log(error)
    }
});

module.exports = router;