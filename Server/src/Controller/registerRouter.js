const express = require("express");
const User = require('../Model/usersSchema')
const router = express.Router();

// post request for register the user
router.post("/", async (req, res) => {
    try{
        console.log(req.body)
        const appUser = await User.create(req.body)
       res.send({
        message: 'User Registered'
       })
    }catch(error){
        console.log(error)
    }
});

// router.post("/", async (req, res) => {
//     try{
//         console.log(req.body)
//         if(req.body.phoneNmber && req.body.password){
//             const registeredUser = await User.findOne(req.body)
//             if(registeredUser){
// 				res.send(registeredUser)
// 			}else{
// 				res.json({message: "No user found"})
// 			}
//         }else{
// 			res.json({message: "All fields are required. Complete the form!!"})
// 		}
        
       
//     }catch(error){
//         console.log(error)
//     }
// });

// view users
router.get("/", async (req, res) => {

});

module.exports = router;