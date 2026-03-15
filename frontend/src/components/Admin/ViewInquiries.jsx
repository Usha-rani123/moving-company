import { useEffect, useState } from "react";
import { listInquiries, updateQuote } from "../../services/apiServices";

const ViewInquiries = () => {
  const [inquiries, setInquiries] = useState([]);
  const [prices, setPrices] = useState({});

  useEffect(() => {
    loadInquiries();
  }, []);

  const loadInquiries = async () => {
    try {
      const data = await listInquiries();
      setInquiries(data);
    } catch (error) {
      console.error("Error loading inquiries:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h3>Customer Inquiries</h3>

      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Service</th>
            <th>From</th>
            <th>To</th>
            <th>House Type</th>
            <th>Move Date</th>
          </tr>
        </thead>

        <tbody>
          {inquiries.map((inq) => (
            <tr key={inq._id}>
              <td>{inq.name}</td>
              <td>{inq.service}</td>
              <td>{inq.fromLocation}</td>
              <td>{inq.toLocation}</td>
              <td>{inq.houseType}</td>
              <td>{new Date(inq.moveDate).toLocaleDateString()}</td>
              <td>
                <span
                  className={`badge ${
                    inq.status === "NEW"
                      ? "bg-warning text-dark"
                      : inq.status === "CONTACTED"
                      ? "bg-info"
                      : inq.status === "QUOTED"
                      ? "bg-primary"
                      : inq.status === "BOOKED"
                      ? "bg-success"
                      : "bg-danger"
                  }`}
                >
                  {inq.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewInquiries;
