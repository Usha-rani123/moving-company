const express = require("express");
const router = express.Router();

const serviceController = require("../controllers/service.controller");

router.post("/", serviceController.createService);

router.get("/", serviceController.listServices);

router.delete("/:id", serviceController.deleteService);

module.exports = router;
