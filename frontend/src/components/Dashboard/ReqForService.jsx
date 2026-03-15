import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createInquiry, listServices } from "../../services/apiServices";
const ReqForService = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    service: "",
    fromLocation: "",
    toLocation: "",
    houseType: "",
    moveDate: "",
    message: "",
  });
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadServices();
  }, []);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.name &&
      formData.mobile &&
      formData.service &&
      formData.fromLocation &&
      formData.toLocation &&
      formData.moveDate
    ) {
      try {
        const result = await createInquiry(formData);

        console.log("API Response:", result);

        alert("Request submitted successfully");
        navigate("/dashboard/quickquote");
        setFormData({
          name: "",
          email: "",
          mobile: "",
          service: "",
          fromLocation: "",
          toLocation: "",
          houseType: "",
          moveDate: "",
          message: "",
        });
      } catch (error) {
        console.error("Inquiry error:", error);
        alert(error.message);
      }
    } else {
      alert("Please fill all required fields");
    }
  };

  return (
    <div className="container mt-4">
      <h3>Request Moving Service</h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label fw-bold">Customer Name *</label>
          <input
            type="text"
            className="form-control w-50"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Email</label>
          <input
            type="email"
            className="form-control w-50"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Mobile *</label>
          <input
            type="text"
            className="form-control w-50"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Service *</label>
          <select
            className="form-select w-50"
            aria-label="Default select example"
            name="service"
            value={formData.service}
            onChange={handleChange}
          >
            <option value="">Select Service</option>
            {services.map((service) => (
              <option key={service._id} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">From Location *</label>
          <input
            type="text"
            className="form-control w-50"
            name="fromLocation"
            value={formData.fromLocation}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">To Location *</label>
          <input
            type="text"
            className="form-control w-50"
            name="toLocation"
            value={formData.toLocation}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">House Type</label>
          <select
            className="form-select w-50"
            aria-label="Default select example"
            name="houseType"
            value={formData.houseType}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option>1BHK</option>
            <option>2BHK</option>
            <option>3BHK</option>
            <option>Villa</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Move Date *</label>
          <input
            type="date"
            className="form-control w-50"
            name="moveDate"
            value={formData.moveDate}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Additional Message</label>
          <textarea
            className="form-control w-50"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default ReqForService;
