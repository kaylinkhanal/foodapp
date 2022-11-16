const express = require("express");
const usersModel = require("../Model/usersSchema");
const router = express.Router();
const usersModel = require('../Model/usersSchema')


// post request for register the user
router.post("/", async (req, res) => {
    try{
     usersModel.create(req.body)
    }catch (error){
        console.log('error')
    }
});

// view users
router.get("/", async (req, res) => {

});

module.exports = router;
