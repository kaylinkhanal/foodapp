const express = require("express");
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
        const restaurantsList = await Restaurant.find()
        res.json({
            restaurantsList : restaurantsList
        })
    }catch(error){
        console.log(error)
    }
});

module.exports = router;
