const express = require("express");
const usersModel = require("../Model/usersSchema");
const router = express.Router();


// post request for register the user
router.post("/register", async (req, res) => {
    console.log("hello")
    try{
     usersModel.create(req.body)
    console.log(req.body)
    }catch (error){
        console.log('error')
    }
    
});

// view users
router.get("/", async (req, res) => {

});

module.exports = router;
