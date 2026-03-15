const express = require("express");
const router = express.Router();

const quoteController = require("../controllers/quote.controller");
const auth = require("../middleware/auth.middleware");
router.post("/", auth, quoteController.createQuote);

router.get("/", quoteController.listQuotes);
router.get("/customer", auth, quoteController.getCustomerQuotes);
router.get("/:id", quoteController.getQuoteById);

router.put("/:id", quoteController.updateQuote);

module.exports = router;
