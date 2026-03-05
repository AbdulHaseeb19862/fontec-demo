import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <Outlet />
      </main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
