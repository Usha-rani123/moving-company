const Booking = require("../models/booking.model");
const Quote = require("../models/quote.model");
/**
 * POST /bookings
 * Create new booking
 */
exports.createBooking = async (req, res) => {
  try {
    const { quoteId } = req.body;

    const quote = await Quote.findById(quoteId);

    if (!quote) {
      return res.status(404).json({
        message: "Quote not found",
      });
    }
    const price = quote.finalPrice || quote.estimatedPrice;
    const booking = await Booking.create({
      userId: req.user.id,
      quoteId: quoteId,
      moveDate: quote.moveDate,
      price: price,
      status: "BOOKED",
    });

    return res.status(201).json({
      message: "Booking created successfully",
      data: booking,
    });
  } catch (error) {
    console.error("Booking error:", error);

    return res.status(500).json({
      message: "Error creating booking",
      error: error.message,
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

/**
 * GET /bookings/my-bookings
 * Get bookings for logged-in customer
 */
exports.getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user.id })
      .populate("quoteId")
      .sort({ createdAt: -1 });

    return res.status(200).json(bookings);
  } catch (error) {
    console.log("Error fetching customer bookings:", error);

    return res.status(500).json({
      message: "Error fetching customer bookings",
    });
  }
};

// controllers/booking.controller.js

exports.getDashboardStats = async (req, res) => {
  try {
    const userId = req.user.id;

    const totalOrders = await Booking.countDocuments({ userId });

    const pending = await Booking.countDocuments({
      userId,
      status: "BOOKED",
    });

    const completed = await Booking.countDocuments({
      userId,
      status: "COMPLETED",
    });

    res.status(200).json({
      totalOrders,
      pending,
      completed,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching dashboard stats",
    });
  }
};

exports.completeBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status: "COMPLETED" },
      { new: true }
    );

    res.json({
      message: "Booking completed",
      booking,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating booking",
    });
  }
};
