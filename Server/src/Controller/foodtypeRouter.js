const express = require("express");
const Foodtype = require('../Model/foodtypeSchema')
const router = express.Router();

// post request for register the foodtype
router.post("/", async (req, res) => {
    try{
        console.log(req.body)
        const registerFood = await Foodtype.create(req.body)
       res.send({
        message: 'food Registered'
       })
    }catch(error){
        console.log(error)
    }
});
// view foodtype
router.get("/", async (req, res) => {

});

module.exports = router;