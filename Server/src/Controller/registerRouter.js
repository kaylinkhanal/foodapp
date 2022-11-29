const express = require("express");
const User = require('../Model/usersSchema')
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 0;

// post request for register the user
router.post("/", async (req, res) => {
    try{
        bcrypt.hash(req.body.password, saltRounds).then(function(hash) {
            req.body.password= hash
            req.body.token= ''
        }).then((data)=>{
            const appUser= User.create(req.body) 
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

});

module.exports = router;