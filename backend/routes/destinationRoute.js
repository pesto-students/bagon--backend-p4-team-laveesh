const express = require("express");
const { registerDestination, getDestination, getDestinationById } = require("../controllers/registerDestination");
const router = express.Router();

router.route("/").get((req, res) => res.send("Destination"));
router.route("/destination").post(registerDestination).get(getDestination) ;
router.route("/destination/:id").get(getDestinationById);

module.exports = router;
