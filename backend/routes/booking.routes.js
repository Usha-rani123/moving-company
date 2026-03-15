const express = require("express");
const router = express.Router();

const bookingController = require("../controllers/booking.controller");
const auth = require("../middleware/auth.middleware");
// POST /bookings - Handle form submission to create new booking
router.post("/", auth, bookingController.createBooking);
// GET /bookings - Display all bookings
router.get("/", auth, bookingController.listBookings);
router.get("/my-bookings", auth, bookingController.getMyBookings);
router.get("/dashboard-stats", auth, bookingController.getDashboardStats);
router.put("/:id/complete", auth, bookingController.completeBooking);
// GET /bookings/:id  - Display single booking
router.get("/:id", auth, bookingController.getBookingById);

module.exports = router;
