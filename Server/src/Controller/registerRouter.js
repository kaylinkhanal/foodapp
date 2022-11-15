const express = require("express");
const User = require('../Model/usersSchema')
const router = express.Router();


// post request for register the user
router.post("/register", async (req, res) => {
    try{
        console.log(req.body)
        const appUser = User.create(req.body)
       
    }catch(error){
        console.log(error)
    }
});

// view users
router.get("/", async (req, res) => {

});

module.exports = router;
