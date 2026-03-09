const Service = require("../models/service.model");

/**
 * POST /services
 * Create new service
 */
exports.createService = async (req, res) => {
  try {
    const { title, description, imageUrl } = req.body;

    const service = await Service.create({
      title,
      description,
      imageUrl,
    });

    return res.status(201).json({
      message: "Service created successfully",
      data: service,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error creating service",
    });
  }
};

/**
 * GET /services
 * Get all services
 */
exports.listServices = async (req, res) => {
  try {
    const services = await Service.find().sort({ createdAt: -1 });

    return res.status(200).json(services);
  } catch (error) {
    return res.status(500).json({
      message: "Error fetching services",
    });
  }
};

/**
 * DELETE /services/:id
 */
exports.deleteService = async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);

    if (!service) {
      return res.status(404).json({
        message: "Service not found",
      });
    }

    return res.status(200).json({
      message: "Service deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error deleting service",
    });
  }
};
