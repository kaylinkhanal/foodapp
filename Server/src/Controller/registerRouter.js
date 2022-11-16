const express = require("express");
<<<<<<< HEAD
const usersModel = require("../Model/usersSchema");
const router = express.Router();


// post request for register the user and all the router should be in /
router.post("/", async (req, res) => {
    usersModel.create(req.body)
    console.log(req.body)
=======
const User = require('../Model/usersSchema')
const router = express.Router();


// post request for register the user
router.post("/register", async (req, res) => {
    try{
        console.log(req.body)
        const appUser = await User.create(req.body)
       
    }catch(error){
        console.log(error)
    }
});

router.post("/login", async (req, res) => {
    try{
        console.log(req.body)
        if(req.body.phoneNmber && req.body.password){
            const registeredUser = await User.findOne(req.body)
            if(registeredUser){
				res.send(registeredUser)
			}else{
				res.json({message: "No user found"})
			}
        }else{
			res.json({message: "All fields are required. Complete the form!!"})
		}
        
       
    }catch(error){
        console.log(error)
    }
>>>>>>> 1f802ac609b7042d8065b377e0fce8cd928f566a
});

// view users
router.get("/", async (req, res) => {

});

module.exports = router;
