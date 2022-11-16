const express = require("express");
const usersModel = require("../Model/usersSchema");
const router = express.Router();


// post request for register the user and all the router should be in /
router.post("/", async (req, res) => {
    usersModel.create(req.body)
    console.log(req.body)
});

// view users
router.get("/", async (req, res) => {

});

module.exports = router;
