const express = require("express");
const User = require('../Model/usersSchema')
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const generateAccessToken = require('../utilities/generateJwt')

router.post("/", async (req, res) => {
    try{
        // to compare the hashed password from DB first find the user
        const registeredUser = await User.findOne({email: req.body.email})
        
        hashedPassword = registeredUser.password

        // Load hash from your password DB.
        bcrypt.compare(req.body.password, hashedPassword).then(function(result) {
            console.log("result", result)

            if(result){
                const userEmail = {email: req.body.email}
                const token =  generateAccessToken(userEmail);
                registeredUser.token = token
                res.json({
                    detail: registeredUser,
                    msg: `You're logged in`
                })
                // User.findOneAndUpdate(userEmail, {
                //     $set: {
                //         token: userToken
                //     }
                // }).then((data)=>{
                //     console.log(data)
                //     res.json({
                //         accessToken: data.token,
                //         detail: registeredUser,
                //         msg: `You're logged in`
                //     })
                // })
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
