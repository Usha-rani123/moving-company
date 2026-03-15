import { Outlet, NavLink } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className="bg-dark text-white p-3"
        style={{ width: "220px", height: "100vh" }}
      >
        <h4>Admin Panel</h4>

        <ul className="nav flex-column mt-4">
          <li className="nav-item">
            <NavLink
              end
              to="/admin"
              className={({ isActive }) =>
                `nav-link text-white ${isActive ? "bg-primary rounded" : ""}`
              }
            >
              Dashboard
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/admin/add-service"
              className={({ isActive }) =>
                `nav-link text-white ${isActive ? "bg-primary rounded" : ""}`
              }
            >
              Add Service
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/admin/services"
              className={({ isActive }) =>
                `nav-link text-white ${isActive ? "bg-primary rounded" : ""}`
              }
            >
              View Services
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/admin/inquiries"
              className={({ isActive }) =>
                `nav-link text-white ${isActive ? "bg-primary rounded" : ""}`
              }
            >
              View Inquiries
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/admin/quotes"
              className={({ isActive }) =>
                `nav-link text-white ${isActive ? "bg-primary rounded" : ""}`
              }
            >
              View Quotes
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Content */}
      <div className="p-4 w-100">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
