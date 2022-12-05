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

// delete restaurant
router.delete('/:id', async(req, res)=>{
    try{
        const deleteRestro = await Restaurant.deleteOne({_id: req.params.id})
        res.send(deleteRestro)
    }catch(err){
        console.log(err)
    }
})

router.put('/:id', async(req, res)=>{
    try{
        const editData = await Restaurant.updateOne({_id: req.params.id},{$set: req.body})
        res.send(editData)
    }catch(err){
        console.log(err)
    }
})

module.exports = router;
