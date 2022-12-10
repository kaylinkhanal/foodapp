const express = require("express");
const Food = require('../Model/foodSchema')
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
router.post('/',upload, async (req, res) => {
    try{
        // console.log(req.file)
        req.body.foodImage = req.file.filename

        // console.log(req.body)
        const addFood = Food.create(req.body)

        res.json({
            message: 'Added food',
            detail: addFood
        })
    }catch(error){
        res.json({
            errorMsg: 'something went wrong', error
        })
    }
});

//get food list
router.get("/", async (req, res) => {
    try{
        const foodList = await Food.find()

        res.json({
            foodList: foodList
        })
    }catch(err){
        console.log(err)
    }
});

// update food data
router.put("/",  async (req, res) => {
    req.body.foodImage = req.file?.filename || ''
    try{
        console.log(req.body)
        const updateFoodData = await Food.findByIdAndUpdate({_id: req.body._id}, {$set: req.body})

        res.json({
            message: 'Updated food data',
            updatedItem: updateFoodData
        })
    }catch(error){
        console.log(error)
    }
});

// delete food data
router.delete('/:id', async(req, res)=>{
    try{
        // res.send(req.params.id)
        const result = await Food.deleteOne({_id: req.params.id})
        res.send(result)
    }catch(err){
        console.log(err)
    }
    
})

module.exports = router;
