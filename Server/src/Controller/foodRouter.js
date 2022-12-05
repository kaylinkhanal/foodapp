const express = require("express");
const Food = require('../Model/foodSchema')
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
    req.body.foodImg = req.file.filename
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
            details: foodList
        })
    }
}catch(error) {
    console.log(error)
}
});
router.put("/",  async (req, res, next) => {
    req.body.foodImg = req.file?.filename || ''
    try{
        console.log(req.body)
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
            errorMsg: 'something went wrong',
            errDetail: error
        })
    }
});


router.delete("/delete/:id", async (req, res) => {
    try{
        const {id}=req.params
        console.log(id);
        const check = await Food.deleteOne({_id:id})
        //console.log(check.deletedCount);
        if(!check.deletedCount){
            res.json({
                message: 'Error occurred while deleting',
                details:"notdeleted"
            })
        }else{
            res.json({
                message: 'deleted successful',
                details:"deleted"
            })
        }
        
    }catch(error) {
        console.log(error)
    }
    });

    

module.exports = router;

