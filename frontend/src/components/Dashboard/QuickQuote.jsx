import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  createQuote,
  createBooking,
  getCustomerQuotes,
} from "../../services/apiServices";
import { listServices } from "../../services/apiServices";
const QuickQuote = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({
    service: "",
    fromLocation: "",
    toLocation: "",
    houseType: "",
    moveDate: "",
  });
  const [error, setError] = useState("");
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    loadServices();
  }, []);

  // Check for quote update
  useEffect(() => {
    if (!quote) return;

    const interval = setInterval(async () => {
      try {
        const quotes = await getCustomerQuotes();

        if (!Array.isArray(quotes)) return;

        const updatedQuote = quotes.find((q) => q._id === quote._id);

        if (updatedQuote && updatedQuote.finalPrice) {
          setQuote(updatedQuote);
          clearInterval(interval);
        }
      } catch (error) {
        console.error("Error checking quote update:", error);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [quote]);

  const loadServices = async () => {
    try {
      const data = await listServices();

      console.log("Services API response:", data);

      setServices(data);
    } catch (error) {
      console.error("Error loading services:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCalculate = async (e) => {
    e.preventDefault();

    try {
      const result = await createQuote(formData);

      setQuote(result.data); // depends on your backend response
    } catch (error) {
      setError(error.message);
      console.error("Quote error:", error);
    }
  };

  const handleConfirmBooking = async () => {
    try {
      await createBooking({
        quoteId: quote._id,
      });

      navigate("/dashboard/orders");
    } catch (error) {
      console.error("Booking error:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Quick Moving Quote</h3>

      <div className="card p-4 shadow-sm">
        {error && <div className="text-danger mb-3 text-center">{error}</div>}
        <form onSubmit={handleCalculate}>
          <div className="mb-3">
            <label className="form-label">Service Type</label>
            <select
              className="form-control"
              name="service"
              required
              onChange={handleChange}
            >
              <option>Select Service</option>
              {services.map((service) => (
                <option key={service._id} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">From Location</label>
            <input
              type="text"
              className="form-control"
              name="fromLocation"
              placeholder="Enter pickup city"
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">To Location</label>
            <input
              type="text"
              className="form-control"
              name="toLocation"
              placeholder="Enter destination city"
              onChange={handleChange}
            />
          </div>
          {formData.service === "House Shifting" && (
            <div className="mb-3">
              <label className="form-label">House Type</label>
              <select
                className="form-control"
                name="houseType"
                onChange={handleChange}
              >
                <option>Select House Type</option>
                <option>1 BHK</option>
                <option>2 BHK</option>
                <option>3 BHK</option>
                <option>Villa</option>
                <option>Office</option>
              </select>
            </div>
          )}
          <div className="mb-3">
            <label className="form-label">Move Date</label>
            <input
              type="date"
              className="form-control"
              name="moveDate"
              onChange={handleChange}
            />
          </div>

          <button className="btn btn-primary w-100">Get Quick Quote</button>
        </form>

        {quote && (
          <div className="alert alert-success mt-4 text-center">
            <h5>Estimated Price: ₹{quote.estimatedPrice}</h5>

            {quote.finalPrice ? (
              <>
                <h5 className="text-primary">
                  Final Price from Admin: ₹{quote.finalPrice}
                </h5>

                <button
                  className="btn btn-success mt-3"
                  onClick={handleConfirmBooking}
                >
                  Confirm Booking
                </button>
              </>
            ) : (
              <p className="text-warning mt-2">
                Waiting for admin to send final quote...
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuickQuote;
