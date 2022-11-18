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
                    msg: `You're logged in`
                })
			}else{
				res.json({
                    msg: "No user found"
                })
			}
        }else{
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
