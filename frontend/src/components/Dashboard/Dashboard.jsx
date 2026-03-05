const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to your dashboard.</p>

      <div className="row">
        <div className="col-md-4">
          <div className="card p-3">
            <h5>Total Orders</h5>
            <h3>25</h3>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3">
            <h5>Pending Services</h5>
            <h3>10</h3>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3">
            <h5>Completed</h5>
            <h3>15</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
