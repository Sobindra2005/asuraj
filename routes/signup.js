const express = require("express");
const router = express.Router();
const { userDataForLogin } = require("../controllers/signup");

router.get("/signup/", (req, res) => {
  res.send({ msg: "success" });
});

router.post("/signup/", userDataForLogin);

module.exports = router;
