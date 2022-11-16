const express = require("express");
const router = express.Router();


// post request for register the user
router.post('/register', (req, res) => {
    console.log(req.body)
});

// view users
router.get("/", async (req, res) => {

});

module.exports = router;
