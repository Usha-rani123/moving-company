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
    price: {
      type: Number,
    },
    status: {
      type: String,
      enum: ["BOOKED", "COMPLETED"],
      default: "BOOKED",
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Booking", bookingSchema);
