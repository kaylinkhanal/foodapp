const express = require("express");
const User = require('../Model/usersSchema')
const router = express.Router();
const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');
router.post("/", async (req, res) => {
    try{
        if( req.body.email && req.body.password ) {
            const token = jwt.sign({ email: req.body.email }, 'ifsjdfosadjofo');
            const registeredUser = await User.findOne({email: req.body.email})
            console.log(registeredUser)
            const hashedPassword = registeredUser.password
            bcrypt.compare(req.body.password, hashedPassword).then(function(result) {
              if(result=== true){
            	res.json({
                            detail: registeredUser,
                            msg: `You're logged in`,
                            token: token
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