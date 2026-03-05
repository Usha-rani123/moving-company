import Landingpage from "./components/Landingpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Layout from "./components/Layout/Layout";
import ReqForService from "./components/Dashboard/ReqForService";
import QuickQuote from "./components/Dashboard/QuickQuote";
import DashboardMenu from "./components/Dashboard/DashboarMenu";
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes with Topbar */}
        <Route element={<Layout />}>
          {/* Public route */}
          <Route path="/" element={<Landingpage />} />
          <Route path="/login" element={<Login />} />

          <Route path="/dashboard" element={<DashboardMenu />}>
            <Route index element={<Dashboard />} />
            <Route path="reqforservice" element={<ReqForService />} />
            <Route path="quickquote" element={<QuickQuote />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
