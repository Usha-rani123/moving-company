const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Title must be at least 2 characters long"],
      maxlength: [50, "Title must be less than 50 characters long"],
    },

    description: {
      type: String,
      required: [true, "Description is required"],

      trim: true,
    },
    imageUrl: {
      type: String,
    },
  },
  {
    timestamps: true, //  schema option
  }
);
module.exports = mongoose.model("Service", serviceSchema);
