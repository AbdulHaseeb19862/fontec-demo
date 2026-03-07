import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {" "}
      {/* ← yeh add kiya */}
      <Navbar />
      <main className="flex-1 w-full max-w-7xl mx-auto pt-24">
        {" "}
        {/* ← flex-1 add kiya, w-ful typo fix */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
