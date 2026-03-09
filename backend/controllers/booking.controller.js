const Booking = require("../models/booking.model");

/**
 * POST /bookings
 * Create new booking
 */
exports.createBooking = async (req, res) => {
  try {
    const { userId, inquiryId, quoteId, moveDate } = req.body;

    const booking = await Booking.create({
      userId,
      inquiryId,
      quoteId,
      moveDate,
    });

    return res.status(201).json({
      message: "Booking created successfully",
      data: booking,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error creating booking",
    });
  }
};

/**
 * GET /bookings
 * Get all bookings
 */
exports.listBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("userId")
      .populate("inquiryId")
      .populate("quoteId")
      .sort({ createdAt: -1 });

    return res.status(200).json(bookings);
  } catch (error) {
    return res.status(500).json({
      message: "Error fetching bookings",
    });
  }
};

/**
 * GET /bookings/:id
 */
exports.getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id)
      .populate("userId")
      .populate("inquiryId")
      .populate("quoteId");

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found",
      });
    }

    return res.status(200).json(booking);
  } catch (error) {
    return res.status(500).json({
      message: "Error fetching booking",
    });
  }
};
