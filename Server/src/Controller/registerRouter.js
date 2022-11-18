const express = require("express");
const User = require('../Model/usersSchema')
const router = express.Router();


// post request for register the user
router.post("/", async (req, res) => {
    try{
        console.log(req.body)
        const appUser = await User.create(req.body)
        res.json({
            message: 'User Registered',
            userDetail: appUser
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
