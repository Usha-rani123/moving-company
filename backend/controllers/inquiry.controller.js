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

exports.listInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    return res.status(200).json(inquiries);
  } catch (error) {
    return res.status(500).json({
      message: "Error fetching inquiries",
    });
  }
};

exports.updateInquiryStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    // basic validation
    if (!status) {
      return res.status(400).json({
        message: "Status is required",
      });
    }

    const inquiry = await Inquiry.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true }
    );

    if (!inquiry) {
      return res.status(404).json({
        message: "Inquiry not found",
      });
    }

    return res.status(200).json({
      message: "Inquiry status updated successfully",
      data: inquiry,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error updating inquiry status",
    });
  }
};
