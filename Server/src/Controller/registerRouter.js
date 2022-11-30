const express = require("express");
const User = require('../Model/usersSchema')
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;


// post request for register the user
router.post("/", async (req, res) => {
    try{
        bcrypt.hash(req.body.password, saltRounds).then(function(hash) {
            // console.log(hash)
            req.body.password = hash
            
        }).then((data)=>{
            const appUser = User.create(req.body)
            console.log(req.body)
        
            res.json({
                message: 'User Registered',
                userDetail: appUser
            })  
        })
        
    }catch(error){
        console.log(error)
        res.send({
            errorMsg: "Unable to post user data!",
            errorDetail: error
        })
    }
});

// view users
router.get("/", async (req, res) => {
    try{
        const usersList = await User.find()
        res.json({
            usersList: usersList
        })
        console.log(usersList)
    }catch(error){
        console.log(error)
    }
});

module.exports = router;
