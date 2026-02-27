const express = require("express");
const inquiryController = require("../controllers/inquiry.controller");

const router = express.Router();

//User Routes
//Base path: /users

// GET /users/ne

// POST /users - Handle form submission to create new user
router.post("/", inquiryController.createInquiry);
// GET /inquiries - Display all inquiries
router.get("/", inquiryController.listInquiries);
router.put("/:id/status", inquiryController.updateInquiryStatus);
module.exports = router;
