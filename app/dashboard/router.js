var express = require("express");
const { landingPage } = require("../player/controller");
var router = express.Router();

router.get("/", landingPage);

module.exports = router;
