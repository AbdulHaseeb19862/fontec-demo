import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Outlet } from "react-router-dom";
const Layout = () => {
    return (_jsxs("div", { className: "flex flex-col min-h-screen", children: [" ", _jsx(Navbar, {}), _jsxs("main", { className: "flex-1 w-full max-w-7xl mx-auto pt-24", children: [" ", _jsx(Outlet, {})] }), _jsx(Footer, {})] }));
};
export default Layout;
