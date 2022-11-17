const express = require("express");
const router = express.Router();

// post request for register the user
router.post("/", async (req, res) => {
    try{
        console.log(req.body)
        res.json({
         msg: 'You are logged in'
     })
    }catch (error){
        console.log('error')
    }
});

// view users
router.get("/", async (req, res) => {

});

module.exports = router;