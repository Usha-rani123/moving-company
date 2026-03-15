import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { listBookings, completeBooking } from "../../services/apiServices";

const ViewBookings = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {
    const data = await listBookings();
    setBookings(data);
  };

  const handleComplete = async (id) => {
    await completeBooking(id);

    loadBookings();
  };
  const handleBack = () => {
    navigate("/admin");
  };

  return (
    <>
      <button onClick={handleBack} className="btn btn-outline-secondary">
        <i className="bi bi-arrow-left me-2"></i> Back
      </button>
      <div className="container mt-4">
        <h2>Bookings</h2>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Service</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id}>
                <td>{booking.userId?.name}</td>
                <td>{booking.quoteId?.service}</td>

                <td>
                  {booking.status === "COMPLETED" ? "Completed" : "Booked"}
                </td>

                <td>
                  {booking.status !== "COMPLETED" && (
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() => handleComplete(booking._id)}
                    >
                      Mark Completed
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ViewBookings;
