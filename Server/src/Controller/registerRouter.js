const express = require("express");
const usersModel = require("../Model/usersSchema");
const router = express.Router();


// post request for register the user
router.post("/Register", async (req, res) => {
    usersModel.create(req.body)
    console.log(req.body)
});

// view users
router.get("/Register", async (req, res) => {

});

module.exports = router;
