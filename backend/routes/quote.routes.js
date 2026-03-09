const express = require("express");
const router = express.Router();

const quoteController = require("../controllers/quote.controller");

router.post("/", quoteController.createQuote);

router.get("/", quoteController.listQuotes);

router.get("/:id", quoteController.getQuoteById);

router.put("/:id", quoteController.updateQuote);

module.exports = router;
