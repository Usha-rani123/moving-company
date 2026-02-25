const mongoose = require("mongoose");

const inquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters long"],
      maxlength: [50, "Name must be less than 50 characters long"],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter a valid email address"],
    },
    mobile: {
      type: String,
      required: [true, "Mobile number is required"],
      unique: true,
      trim: true,
      match: [/^[0-9]{10}$/, "Phone number must be exactly 10 digits"],
    },
    service: {
      type: String,
      required: [true, "Service is required"],
      trim: true,
    },
    fromLocation: {
      type: String,
      required: [true, "From Location is required"],
      trim: true,
    },
    toLocation: {
      type: String,
      required: [true, "To Location is required"],
      trim: true,
    },
    houseType: {
      type: String,
      enum: ["1BHK", "2BHK", "3BHK", "VILLA", "OFFICE"],
      required: true,
    },
    moveDate: {
      type: Date,
      required: [true, "Move Date is required"],
      trim: true,
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
    },
    status: {
      type: String,
      enum: ["NEW", "CONTACTED", "QUOTED", "BOOKED", "CANCELLED"],
      default: "NEW",
    },
  },
  {
    timestamps: true, //  schema option
  }
);
module.exports = mongoose.model("Inquiry", inquirySchema);
