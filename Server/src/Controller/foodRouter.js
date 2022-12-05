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
        console.log(req.file)
        req.body.foodImage = req.file.filename || ''

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

// view users
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

// router.get('/:id', async(req, res)=>{
//     try{
//         const result = await Food.findOne({_id:req.params.id})

//         if(result){
//             res.send(result)
//         }else{
//             res.json({
//                 msg: 'result not found'
//             })
//         }
//     }catch(err){
//         console.log(err)
//     }
// })

router.put('/:id', async(req, res)=>{
    try{
        const result = await Food.updateOne(
            {_id : req.params.id},
            {$set: req.body}
        )
        res.send(result)
    }catch(err){

    }
})

module.exports = router;
