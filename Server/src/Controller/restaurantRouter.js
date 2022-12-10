const express = require("express");
const Restaurant = require('../Model/restaurantSchema')
const router = express.Router();
const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../Client/src/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname )
    }
})

const upload = multer({ storage: storage }).single('file')


// post request for register the user
router.post("/", upload, async (req, res) => {
    try{
        console.log(req.file)
        req.body.restroImage = req.file.filename

        console.log(req.body)
        const selectedRestro = Restaurant.create(req.body)
        res.json({
            message: 'Added your selected restaurant',
            restroDetail: selectedRestro
        })
    }catch(error){
        console.log(error)
    }
});

// get restaurant list
router.get("/", async (req, res) => {
    try{
        const restaurantList = await Restaurant.find()
        if(restaurantList){
            res.json({
                restaurantList : restaurantList
            })
        }else{
            res.status(404).send({message: 'restaurant not found'})
        }
        
    }catch(error){
        console.log(error)
    }
});

// restaurant detail route
router.get("/:id", async(req, res)=>{
    try{
        console.log(req.params.id)
        const key = req.params.id

        const restaurant = await Restaurant.findById({_id: key})
        if(restaurant){
            res.send(restaurant)
        }else{
            res.send('Restaurant not found')
        }
        
    }catch(err){
        console.log('error', err)
    }
})

// update restaurant data
router.put('/', async(req, res)=>{
    try{
        req.body.foodImg = req.file?.filename || ''
        console.log(req.body._id)
        const updateRestroData = await Restaurant.updateOne({_id: req.body._id},{$set: req.body})
        res.send({
            message: 'updated the data',
            updatedItem: updateRestroData
        })
    }catch(err){
        console.log(err)
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

module.exports = router;
