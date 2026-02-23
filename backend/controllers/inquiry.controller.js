const Inquiry = require("../models/inquiry.model");

exports.createInquiry = async (req, res) => {
  try {
    const {
      name,
      email,
      mobile,
      service,
      fromLocation,
      toLocation,
      houseType,
      moveDate,
      message,
    } = req.body;
    const inquiry = await Inquiry.create({
      name,
      email,
      mobile,
      service,
      fromLocation,
      toLocation,
      houseType,
      moveDate,
      message,
    });
    return res.status(201).json({
      message: "Inquiry created successfully",
      data: inquiry,
    });
  } catch (error) {
    // Validation errors
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({ errors: messages });
    }

    // Generic error
    return res.status(500).json({
      message: "Error submitting inquiry",
    });
  }
};
