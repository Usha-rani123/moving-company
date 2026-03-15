const express = require("express");
const router = express.Router();

const serviceController = require("../controllers/service.controller");
const auth = require("../middleware/auth.middleware");
router.post("/", auth, serviceController.createService);

router.get("/", serviceController.listServices);

router.delete("/:id", auth, serviceController.deleteService);

module.exports = router;
