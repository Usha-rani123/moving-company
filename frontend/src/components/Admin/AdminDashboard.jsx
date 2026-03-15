import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Admin Dashboard</h2>

      <div className="row">
        {/* Services */}
        <div className="col-md-4">
          <div className="card shadow-sm text-center p-3">
            <h5>Manage Services</h5>
            <p>Add or view moving services</p>
            <Link className="btn btn-primary" to="/admin/services">
              View Services
            </Link>
          </div>
        </div>

        {/* Inquiries */}
        <div className="col-md-4">
          <div className="card shadow-sm text-center p-3">
            <h5>Customer Inquiries</h5>
            <p>View customer service requests</p>
            <Link className="btn btn-primary" to="/admin/inquiries">
              View Inquiries
            </Link>
          </div>
        </div>

        {/* Bookings */}
        <div className="col-md-4">
          <div className="card shadow-sm text-center p-3">
            <h5>Bookings</h5>
            <p>Track confirmed bookings</p>
            <Link className="btn btn-primary" to="/admin/bookings">
              View Bookings
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
