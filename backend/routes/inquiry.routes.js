const express = require("express");
const inquiryController = require("../controllers/inquiry.controller");
const auth = require("../middleware/auth.middleware");
const router = express.Router();

//User Routes
//Base path: /users

// GET /users/ne

// POST /users - Handle form submission to create new user
router.post("/", auth, inquiryController.createInquiry);
// GET /inquiries - Display all inquiries
router.get("/", auth, inquiryController.listInquiries);
router.put("/:id/status", auth, inquiryController.updateInquiryStatus);
module.exports = router;
