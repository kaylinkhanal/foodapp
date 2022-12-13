const express = require("express");
const User = require('../Model/usersSchema')
const router = express.Router();

router.get("/", async (req, res) => {
    try{
        const usersList = await User.find()
        res.json({
            usersList : usersList,
            message: 'successfully fetched users'
        })
    }catch(error){
        console.log(error)
    }
});

module.exports = router;
