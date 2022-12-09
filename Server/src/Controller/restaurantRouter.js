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
  const upload = multer({ storage: storage })

// post request for register the user
router.post("/", upload.single('file'),async (req, res) => {
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
