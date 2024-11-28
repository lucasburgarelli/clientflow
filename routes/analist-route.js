const express = require("express");
const router = express.Router();
const controller = require("../controllers/analist-controller");

router.post("/", controller.post);
router.get("/pagination", controller.getPagination);
router.get("/", controller.get);
router.get("/:cnpj", controller.getByCnpj);
router.post("/", controller.post);
router.put("/:cnpj", controller.put);
router.delete("/:cnpj", controller.delete);

module.exports = router;