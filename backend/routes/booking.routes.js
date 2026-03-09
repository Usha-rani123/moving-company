const express = require("express");
const router = express.Router();

const bookingController = require("../controllers/booking.controller");
// POST /bookings - Handle form submission to create new booking
router.post("/", bookingController.createBooking);
// GET /bookings - Display all bookings
router.get("/", bookingController.listBookings);
// GET /bookings/:id  - Display single booking
router.get("/:id", bookingController.getBookingById);

module.exports = router;
