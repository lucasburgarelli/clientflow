const express = require("express");
const router = express.Router();
const controller = require("../controllers/product-controller");

router.post("/", controller.post);
router.get("/pagination", controller.getPagination);
router.get("/", controller.get);
router.get("/:code", controller.getByCode);
router.put("/:code", controller.put);
router.delete("/:code", controller.delete);

module.exports = router;