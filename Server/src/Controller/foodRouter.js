const express = require("express");
const Food = require('../Model/foodSchema')
const Restaurant = require('../Model/restaurantSchema')
const router = express.Router();
const multer  = require('multer')
// const PORT = 4000;

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
    console.log( req )
    req.body.foodImage = req.file.filename
    try{
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

// view foods
router.get("/", async (req, res) => {
    try{
        const foodsList = await Food.find()
        res.json({
            foodsList : foodsList
        })
    }catch(error){
        console.log(error)
    }
});

router.put("/",  async (req, res, next) => {
    // req.body.foodImg = req.file?.filename || ''
    try{
        console.log(req)
        const selectedFood = Food.findByIdAndUpdate(req.body._id, req.body,
        function (err, docs) {
        if (err){
        console.log(err)
        }
        else{
        console.log("Updated User : ", docs);
        }
        });
        if(selectedFood){
            res.json({
                message: 'Added food',
                detail: selectedFood
            })
        }
    }catch(error){
        console.log(error.Message)
        res.json({
            errorMsg: 'something went222 wrong',
            errDetail: error
        })
    }
});

// view users
router.get("/", async (req, res) => {
    try{
        let foodList
        if(req.query.restroId){
        foodList = await Food.findById(req.query.restroId);
        }else{
        foodList = await Food.find();
        }
        if(foodList){
            res.json({
                message: 'fetch successful',
                foodList: foodList
            })
        }
    }catch(error) {
        console.log(error)
    }
});

router.get('/:id', async (req, res) => {
    try{
        console.log(req.params)
        const restaurantSingle = await Restaurant.findById(req.params.id);
        if(restaurantSingle){
            const foodSingle = await Food.find({restaurant: restaurantSingle.name});
            console.log(foodSingle)
        //     if(foodSingle){
                res.json({
                    foods: foodSingle
                })
            }
        // }
    }catch(error){
        console.log(error.message)

    }
})

router.delete("/:id",  async (req, res, next) => {
    try{
      
      const data= await Food.deleteOne({ _id: req.params.id });
      if(data){
        res.json({
            message: 'Deleted food',
            detail: data
        })
      }
    }catch(error){
        res.json({
            errorMsg: 'something went wrong',
            errDetail: error
        })
    }
});

module.exports = router;

