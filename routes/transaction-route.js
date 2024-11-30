const express = require("express");
const router = express.Router();
const controller = require("../controllers/transaction-controller");

router.post("/", controller.post);
router.get("/products", controller.getWithNames);
router.get("/pagination", controller.getPagination);
router.get("/", controller.get);
router.delete("/", controller.delete);

module.exports = router;