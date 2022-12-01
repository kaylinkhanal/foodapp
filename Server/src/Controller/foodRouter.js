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


router.post("/", upload, async (req, res, next) => {
    req.body.foodImage = req.file.filename
    try{

console.log(req.body)
        const selectedFood = await Food.create(req.body)
        if(selectedFood){
            res.json({
                message: 'Added food',
                detail: selectedFood
            })
        }
    }catch(error){
        res.json({
            errorMsg: 'something went wrong',
            errDetail: error
        })
    }
});

// view users
router.get("/", async (req, res) => {
    try{
        const foodList = await Food.find()
        res.json({
            foodList : foodList
        })
    }catch(error){
        console.log(error)
    }
});

module.exports = router;
