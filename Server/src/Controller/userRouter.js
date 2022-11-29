const express = require("express");
const User = require('../Model/usersSchema')
const router = express.Router();

router.get('/', (req, res) => {
    User.find()
    .then((result) => {
        res.send(result);
        console.log(result)
    })
    .catch(err => {
        console.log(err)
    })
// res.send(dbArr);

    console.log('users')
})

module.exports = router;