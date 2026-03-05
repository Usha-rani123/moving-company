import { NavLink, Outlet } from "react-router-dom";
import bg1 from "../../assets/bg1.jpg";
function DashboardMenu() {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className="p-3 bg-light position-fixed"
        style={{
          width: "250px",
          top: "64px",
          bottom: "0",
          borderRight: "1px solid #ccc",
          overflowY: "auto",
        }}
      >
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <NavLink
              end
              to="/dashboard"
              className={({ isActive }) =>
                `nav-link ${
                  isActive ? "active bg-primary text-white" : "link-dark"
                }`
              }
            >
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/reqforservice"
              className={({ isActive }) =>
                `nav-link ${
                  isActive ? "active bg-primary text-white" : "link-dark"
                }`
              }
            >
              Req For Service
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/quickquote"
              className={({ isActive }) =>
                `nav-link ${
                  isActive ? "active bg-primary text-white" : "link-dark"
                }`
              }
            >
              Quick Quote
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Content */}
      <div
        style={{
          marginLeft: "250px",
          padding: "20px",
          width: "100%",
          backgroundImage: `url(${bg1})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardMenu;
