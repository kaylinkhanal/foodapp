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

const upload = multer({ storage: storage })
// post request for register the user
router.post("/", upload.single('file'), async (req, res, next) => {
    // console.log(req.file)
    req.body.foodImage = req.file.filename
    try{
        console.log(req.body)
        const selectedFood = Food.create(req.body)
        // console.log(selectedFood)
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
    const foodList = await Food.find();
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

