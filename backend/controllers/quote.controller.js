const Quote = require("../models/quote.model");

/**
 * POST /quotes
 * Create new quote
 */
exports.createQuote = async (req, res) => {
  try {
    const { inquiryId, price, remarks, status } = req.body;

    const quote = await Quote.create({
      inquiryId,
      price,
      remarks,
      status,
    });

    return res.status(201).json({
      message: "Quote created successfully",
      data: quote,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error creating quote",
    });
  }
};

/**
 * GET /quotes
 * Get all quotes
 */
exports.listQuotes = async (req, res) => {
  try {
    const quotes = await Quote.find().sort({ createdAt: -1 });

    return res.status(200).json(quotes);
  } catch (error) {
    return res.status(500).json({
      message: "Error fetching quotes",
    });
  }
};

exports.getQuoteById = async (req, res) => {
  try {
    const { price, remarks, status } = req.body;
    const updateData = {
      price,
      remarks,
      status,
    };
    const quote = await Quote.findById(req.params.id, updateData, {
      new: true,
      runValidators: true,
    });
    if (!quote) {
      return res.status(404).json({
        message: "Quote not found",
      });
    }

    return res.status(200).json(quote);
  } catch (error) {
    return res.status(400).json({
      message: "Error fetching quote",
    });
  }
};

exports.updateQuote = async (req, res) => {
  try {
    const { price, remarks, status } = req.body;
    const updateData = {
      price,
      remarks,
      status,
    };

    const quote = await Quote.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!quote) {
      return res.status(404).json({
        message: "Quote not found",
      });
    }

    return res.status(200).json({
      message: "Quote updated successfully",
      quote,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error updating quote",
    });
  }
};

/**
 * DELETE /services/:id
 */
//  exports.deleteService = async (req, res) => {
//   try {
//     const service = await Service.findByIdAndDelete(req.params.id);

//     if (!service) {
//       return res.status(404).json({
//         message: "Service not found",
//       });
//     }

//     return res.status(200).json({
//       message: "Service deleted successfully",
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: "Error deleting service",
//     });
//   }
// };
