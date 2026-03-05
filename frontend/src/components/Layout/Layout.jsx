import { Outlet } from "react-router-dom";
import Topbar from "../Topbar"; // we’ll move navbar here

const Layout = () => {
  return (
    <>
      <Topbar />
      <Outlet />
    </>
  );
};

export default Layout;
