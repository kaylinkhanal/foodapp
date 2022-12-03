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

// get restaurant list
router.get("/", async (req, res) => {
    try{
        const restaurantList = await Restaurant.find()
        res.json({
            restaurantList : restaurantList
        })
    }catch(error){
        console.log(error)
    }
});

// prduct detail route
router.get("/:_id", async(req, res)=>{
    try{
        console.log(req.params._id)
        const key = req.params._id

        const restaurant = await Restaurant.find({_id: key})
        if(restaurant){
            res.json({
                details: restaurant
            })
        }else{
            res.send('Restaurant not found')
        }
        
    }catch(err){
        console.log('error', err)
    }
})

module.exports = router;
