const express = require("express");
const usersModel = require("../Model/usersSchema");
const router = express.Router();

// post request for register the user
router.post("/", async (req, res) => {
    try{
    const data = await usersModel.create(req.body)
    if(data){
        res.json({
            msg: 'user registered'
        })
    }
    }catch (error){
        console.log('error')
    }
});

// view users
router.get("/", async (req, res) => {

});

module.exports = router;
