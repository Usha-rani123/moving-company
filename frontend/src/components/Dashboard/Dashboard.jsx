import { useEffect, useState } from "react";
import { getDashboardStats } from "../../services/apiServices";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalOrders: 0,
    pending: 0,
    completed: 0,
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const data = await getDashboardStats();
      setStats(data);
    } catch (error) {
      console.error("Error loading dashboard:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Dashboard</h2>

      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h6>Total Orders</h6>
            <h3>{stats.totalOrders}</h3>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h6>Pending Moves</h6>
            <h3>{stats.pending}</h3>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h6>Completed Moves</h6>
            <h3>{stats.completed}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
