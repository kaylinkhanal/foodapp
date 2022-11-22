const express = require("express");
const Food = require('../Model/foodSchema')
const router = express.Router();


// post request for register the user
router.post("/", async (req, res) => {
    try{
        console.log(req.body)
        const selectedFood = Food.create(req.body)

        res.json({
            message: 'Added food',
            detail: selectedFood
        })
    }catch(error){
        res.json({
            errorMsg: 'something went wrong',
            errDetail: error
        })
    }
});

// view users
router.get("/", async (req, res) => {

});

module.exports = router;
