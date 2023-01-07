const express = require("express");
const { registerUser, authUser } = require("../controllers/registerUser");
const router = express.Router();

router.route("/").get((req, res) => res.send("Users"));
router.route("/").post(registerUser);
router.route("/login").post(authUser);

module.exports = router;
