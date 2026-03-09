const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Moving Company API running");
// });
//Inquiry Routes
const inquiryRoutes = require("./routes/inquiry.routes");
app.use("/inquiries", inquiryRoutes);
//User Routes
const userRoutes = require("./routes/user.routes");
app.use("/users", userRoutes);
//Service Routes
const serviceRoutes = require("./routes/service.routes");
app.use("/services", serviceRoutes);
//Quote Routes
const quoteRoutes = require("./routes/quote.routes");
app.use("/quotes", quoteRoutes);
//Booking Routes
const bookingRoutes = require("./routes/booking.routes");
app.use("/bookings", bookingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
