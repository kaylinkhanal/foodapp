const express = require("express");
const Restaurant = require("../Model/restSchema");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const appUser = await Restaurant.create(req.body);
    if (appUser) {
      res.send({
        message: "Restaurant added",
      });
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
