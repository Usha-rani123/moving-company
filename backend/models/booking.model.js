const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    inquiryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Inquiry",
      required: true,
    },
    quoteId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quote",
      required: true,
    },
    moveDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      default: "BOOKED",
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Booking", bookingSchema);
