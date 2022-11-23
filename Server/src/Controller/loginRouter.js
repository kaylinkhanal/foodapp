const express = require("express");
const User = require('../Model/usersSchema')
const router = express.Router();

router.post("/", async (req, res) => {
    try{
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
    }catch(error){
        console.log(error)
    }
});

// view users
router.get("/", async (req, res) => {

});

module.exports = router;

module.exports = router;