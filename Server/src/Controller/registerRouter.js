const express = require("express");
const router = express.Router();


// post request for register the user
router.post("/", async (req, res) => {

    router.post("/register", async (req, res) => {
        console.log("hello")
        try{
         usersModel.create(req.body)
        console.log(req.body)
        }catch (error){
            console.log('error')
        }
});
})
// view users
router.get("/", async (req, res) => {

});

module.exports = router;
