const Quote = require("../models/quote.model");

/**
 * POST /quotes
 * Create new quote
 */
exports.createQuote = async (req, res) => {
  try {
    const { service, fromLocation, toLocation, houseType, moveDate } = req.body;

    if (!service || !fromLocation || !toLocation || !moveDate) {
      return res.status(400).json({
        message:
          "Service, From Location, To Location and Move Date are required",
      });
    }

    if (service === "House Shifting" && !houseType) {
      return res.status(400).json({
        message: "House type is required for house shifting",
      });
    }

    // Calculate estimated price
    let estimatedPrice = 3000;

    if (houseType === "2 BHK") estimatedPrice += 1000;
    if (houseType === "3 BHK") estimatedPrice += 2000;
    if (houseType === "Villa") estimatedPrice += 3000;

    const quote = await Quote.create({
      userId: req.user.id,
      service,
      fromLocation,
      toLocation,
      houseType,
      moveDate,
      estimatedPrice,
    });

    return res.status(201).json({
      message: "Quote created successfully",
      data: quote,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Error creating quote",
    });
  }
};
/**
 * GET /quotes
 * Get all quotes
 */
exports.getCustomerQuotes = async (req, res) => {
  try {
    const quotes = await Quote.find({
      userId: req.user.id,
    }).sort({ createdAt: -1 });

    res.status(200).json(quotes);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching quotes",
    });
  }
};
exports.listQuotes = async (req, res) => {
  try {
    const quotes = await Quote.find()
      .populate("userId", "name email") // fetch customer info
      .sort({ createdAt: -1 });

    return res.status(200).json(quotes);
  } catch (error) {
    return res.status(500).json({
      message: "Error fetching quotes",
    });
  }
};

// Get Quote by Id
exports.getQuoteById = async (req, res) => {
  try {
    const quote = await Quote.findById(req.params.id);
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

// Update Quote
exports.updateQuote = async (req, res) => {
  try {
    const { finalPrice, remarks } = req.body;

    const quote = await Quote.findByIdAndUpdate(
      req.params.id,
      { finalPrice, remarks, status: "QUOTED" },
      { new: true }
    );

    res.json({
      message: "Quote updated",
      data: quote,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating quote" });
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
