const express = require("express");
const router = express.Router();
const { userDataForLogin } = require("../controllers/signup");

router.get("/signup/", (req, res) => {
  res.send({ msg: "on signup page" });
});

router.post("/signup/", userDataForLogin);

module.exports = router;
