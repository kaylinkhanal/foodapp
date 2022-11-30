const express = require("express");
const User = require('../Model/usersSchema')
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.post("/", async (req, res) => {
    try{
        // to compare the hashed password from DB first find the user
        const registeredUser = await User.findOne({email: req.body.email})
        
        hashedPassword = registeredUser.password

        // Load hash from your password DB.
        bcrypt.compare(req.body.password, hashedPassword).then(function(result) {
            console.log("result", result)

            if(result){
                res.send({
                    detail: registeredUser,
                    msg: `You're logged in`
                })
            }else{
                res.json({
                    msg: "Invalid email or password"
                })
            }
        });
        
    }catch(error){
        console.log(error)
    }
});

// view users
router.get("/", async (req, res) => {

});

module.exports = router;

