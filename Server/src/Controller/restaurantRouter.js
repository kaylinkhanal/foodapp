const express = require("express");
<<<<<<< HEAD
const Restaurant = require('../Model/restaurantsSchema')
const router = express.Router();

// post request for register the restaurant
router.post("/", async (req, res) => {
    try{
        console.log(req.body)
        const registeredRestaurant = await Restaurant.create(req.body)
       res.send({
        message: 'Restaurant Registered'
       })
    }catch(error){
        console.log(error)
    }
});


// view restaurants
router.get("/", async (req, res) => {
    try{
    const resturantsList = await Restaurant.find()
       res.send({
        resturantsList: resturantsList
       })
=======
const Restaurant = require('../Model/restaurantSchema')
const router = express.Router();


// post request for register the user
router.post("/", async (req, res) => {
    try{
        const selectedRestro = Restaurant.create(req.body)
        console.log(req.body)
        res.json({
            message: 'Added your selected restaurant',
            restroDetail: selectedRestro
        })
    }catch(error){
        res.json({
            errorMsg: 'The restaurant not found',
            errDetail: error
        })
    }
});

// view users
router.get("/", async (req, res) => {
    try{
        const restaurantList = await Restaurant.find()
        res.json({
            restaurantList : restaurantList
        })
>>>>>>> 58f38a43656896efa1726a6f237b28049c88c054
    }catch(error){
        console.log(error)
    }
});

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> 58f38a43656896efa1726a6f237b28049c88c054
