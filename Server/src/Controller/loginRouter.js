const express = require("express");
const User = require('../Model/usersSchema')
const router = express.Router();
const bcrypt = require('bcrypt');
router.post("/", async (req, res) => {
    try{
        if( req.body.email && req.body.password ) {

            const registeredUser = await User.findOne({email: req.body.email})
            const hashedPassword = registeredUser.password
            console.log( registeredUser )
            console.log( hashedPassword )
            console.log( req.body.password )
            bcrypt.compare(req.body.password, hashedPassword).then(function(result) {
              console.log("resulst", result)
              if(result=== true){
            	res.json({
                            detail: registeredUser,
                            msg: `You're logged in`
                 })
              }else{
                res.json({
                    msg: `invalid creds`
                })
              }
            });
        } else {
			res.json({
                msg: "All fields are required. Complete the form!!"
            })
		}
       
    }catch(error){
        console.log(error)
    }
});

// view users
router.get("/", async (req, res) => {

});

module.exports = router;

module.exports = router;