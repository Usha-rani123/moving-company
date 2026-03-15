import { Navigate } from "react-router-dom";
import authService from "../services/authService";

const AdminProtectedRoute = ({ children }) => {
  const user = authService.getUser();

  if (!user || user.role !== "admin") {
    return <Navigate to="/login" />;
  }

  return children;
};

export default AdminProtectedRoute;
