const express = require("express");
const router = express.Router();
const { userDataForSignup, userDataForProfileSetup} = require("../controllers/signup");

router.get("/signup/", (req, res) => {
  res.send({ msg: "on signup page" });
});

router.post("/signup/", userDataForSignup);
router.post("/signup/information",userDataForProfileSetup)
module.exports = router;
