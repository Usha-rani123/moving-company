const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    service: { type: String, required: true },
    fromLocation: {
      type: String,
      required: [true, "From location is required"],
    },
    toLocation: {
      type: String,
      required: [true, "To location is required"],
    },
    houseType: String,
    moveDate: {
      type: Date,
      required: [true, "Move date is required"],
    },
    estimatedPrice: Number, // price from QuickQuote

    finalPrice: Number,

    remarks: String,
    status: {
      type: String,
      enum: ["PENDING", "ACCEPTED", "REJECTED", "QUOTED"],
      default: "PENDING",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Quote", quoteSchema);
