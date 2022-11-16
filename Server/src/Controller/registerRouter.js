const express = require("express");
const router = express.Router();
const usersModel = require('../Model/usersSchema')


// post request for register the user
router.post('/', (req, res) => {
      try{
        console.log(req.body)
        usersModel.create(req.body)
        }
        catch(error){
            console.log(error)
        }
});

// view users
router.get("/", async (req, res) => {

});

module.exports = router;
