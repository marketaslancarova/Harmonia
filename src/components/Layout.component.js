import { Outlet } from "react-router-dom";

import Navbar from "./Navbar.component";
import Footer from "./Footer.component";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
