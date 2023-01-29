const express = require("express");
const { registerPlace, getPlace, getPlaceById } = require("../controllers/registerPlace");
const router = express.Router();

router.route("/").get((req, res) => res.send("Places"));
router.route("/places").post(registerPlace).get(getPlace) ;
router.route("/places/:id").get(getPlaceById);

module.exports = router;
