const express = require("express");
const usersModel = require("../Model/usersSchema");
const router = express.Router();


// post request for register the user
router.post("/", async (req, res) => {
    try{
        console.log(req.body)
     usersModel.create(req.body)
     res.json({msg:'user created'})
    }catch (error){
        console.log('error')
        res.json({msg:'user already exists'})
    }
});

// view users
router.get("/", async (req, res) => {

});

module.exports = router;