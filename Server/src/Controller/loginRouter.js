const express = require("express");
const User = require('../Model/usersSchema')
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.post("/", async (req, res) => {
    try{
<<<<<<< HEAD
        console.log(req.body)
        if(req.body.email && req.body.password){
            const registeredUser = await User.findOne(req.body)
            if(registeredUser){
				res.json({
                    registeredUser
                })
			}else{
				res.json({status:"300",message: "No user found"})
			}
        }else{
			res.json({status:"301",message: "All fields are required. Complete the form!!"})
		}  
=======
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
        
>>>>>>> 58f38a43656896efa1726a6f237b28049c88c054
    }catch(error){
        console.log(error)
    }
});

// view users
router.get("/", async (req, res) => {

});

module.exports = router;

module.exports = router;