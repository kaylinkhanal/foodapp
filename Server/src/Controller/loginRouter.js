const express = require("express");
const User = require('../Model/usersSchema')
const router = express.Router();

router.post("/", async (req, res) => {
    try{
        console.log(req.body)
        if(req.body.email && req.body.password){
            const registeredUser = await User.findOne(req.body)
            if(registeredUser){
				res.send({
                    detail: registeredUser,
                    message: `You're logged in`
                })
			}else{
				res.json({
                    message: "No user found"
                })
			}
        }else{
			res.json({
                message: "All fields are required. Complete the form!!"
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
