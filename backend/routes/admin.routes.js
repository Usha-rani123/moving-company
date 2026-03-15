const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth.middleware");
const admin = require("../middleware/admin.middleware");

const adminController = require("../controllers/admin.controller");

router.get("/users", auth, admin, adminController.listUsers);

router.get("/inquiries", auth, admin, adminController.listInquiries);

router.get("/quotes", auth, admin, adminController.listQuotes);

router.get("/bookings", auth, admin, adminController.listBookings);

router.put(
  "/bookings/:id/status",
  auth,
  admin,
  adminController.updateBookingStatus
);

module.exports = router;
