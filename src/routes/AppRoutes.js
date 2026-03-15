import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Layout from "@/layouts";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import ProductDetails from "@/pages/ProductDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const AppRoutes = () => {
    return (_jsx("div", { children: _jsx(BrowserRouter, { children: _jsx(Routes, { children: _jsxs(Route, { path: "/", element: _jsx(Layout, {}), children: [_jsx(Route, { index: true, element: _jsx(Home, {}) }), _jsx(Route, { path: "about", element: _jsx(About, {}) }), _jsx(Route, { path: "contact", element: _jsx(Contact, {}) }), _jsx(Route, { path: "product/:id", element: _jsx(ProductDetails, {}) })] }) }) }) }));
};
export default AppRoutes;
