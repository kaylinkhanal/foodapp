const express = require("express");
const usersModel = require("../Model/usersSchema");
const router = express.Router();

// post request for register the user
router.post("/", async (req, res) => {
  users.create(req.body);
});

// view users
router.get("/", async (req, res) => {});

module.exports = router;
