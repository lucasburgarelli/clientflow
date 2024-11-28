const express = require("express");
const router = express.Router();

const controller = require("../controllers/installler-controller");

router.post("/", controller.install);

module.exports = router;