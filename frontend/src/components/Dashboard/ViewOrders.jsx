import { useState, useEffect } from "react";
import { getMyBookings } from "../../services/apiServices";
const ViewOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    loadOrders();
  }, []);
  const loadOrders = async () => {
    try {
      const data = await getMyBookings();
      if (Array.isArray(data)) {
        setOrders(data);
      } else {
        console.error("API error:", data);
        setOrders([]);
      }
    } catch (error) {
      console.error("Error loading orders:", error);
    }
  };

  return (
    <div>
      <h2>My Orders</h2>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Service</th>
            <th>From</th>
            <th>To</th>
            <th>Move Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {Array.isArray(orders) &&
            orders.map((order) => (
              <tr key={order._id}>
                <td>{order.quoteId?.service}</td>
                <td>{order.quoteId?.fromLocation}</td>
                <td>{order.quoteId?.toLocation}</td>
                <td>{order.moveDate?.slice(0, 10)}</td>
                <td>{order.status}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewOrders;
