const express = require("express");
const Food = require('../Model/foodsSchema')
const router = express.Router();

router.post('/' , (req, res) => {
    try{

        const newFood = Food.create(req.body);
        // if(newFood)
        res.send({
            message: 'Food added to the system',
            foodDetails: newFood,
        })
    }catch(error){
        res.send({
            message: 'invalid form fields'
        })
    }
})

router.get('/', async (req, res) => {
    try{

        const foods = await Food.find();
        res.send({
            foodDetails : foods
        })
    }catch(error){
        res.send({
            message: 'Invalid req'
        })
    }
    })
    
    module.exports = router;