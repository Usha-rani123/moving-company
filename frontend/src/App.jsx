import Landingpage from "./components/Pages/Landingpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Layout from "./components/Layout/Layout";
import ReqForService from "./components/Dashboard/ReqForService";
import QuickQuote from "./components/Dashboard/QuickQuote";
import DashboardMenu from "./components/Dashboard/DashboarMenu";
import SignUp from "./components/Login/SignUp";
import ViewOrders from "./components/Dashboard/ViewOrders";
import AdminLayout from "./components/Admin/AdminLayout";
import AdminDashboard from "./components/Admin/AdminDashboard";
import AddService from "./components/Admin/AddService";
import ViewServices from "./components/Admin/ViewServices";
import AdminProtectedRoute from "./routes/AdminProtectedRoute";
import ViewInquiries from "./components/Admin/ViewInquiries";
import ViewQuotes from "./components/Admin/ViewQuotes";
import Profile from "./components/Dashboard/Profile";
import ViewBookings from "./components/Admin/ViewBookings";
import AboutUs from "./components/Footer/AboutUs";
import Prices from "./components/Pages/Prices";
import Contact from "./components/Pages/Contact";
import Services from "./components/Pages/Services";
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes with Topbar */}
        <Route element={<Layout />}>
          {/* Public route */}
          <Route path="/" element={<Landingpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/admin"
            element={
              <AdminProtectedRoute>
                <AdminLayout />
              </AdminProtectedRoute>
            }
          >
            <Route index element={<AdminDashboard />} />

            <Route path="add-service" element={<AddService />} />

            <Route path="services" element={<ViewServices />} />
            <Route path="inquiries" element={<ViewInquiries />} />
            <Route path="quotes" element={<ViewQuotes />} />
            <Route path="bookings" element={<ViewBookings />} />
          </Route>
          <Route path="/dashboard" element={<DashboardMenu />}>
            <Route index element={<Dashboard />} />
            <Route path="reqforservice" element={<ReqForService />} />
            <Route path="quickquote" element={<QuickQuote />} />
            <Route path="orders" element={<ViewOrders />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
