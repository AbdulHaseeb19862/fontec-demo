import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Facebook, Instagram, Youtube, Linkedin, Twitter, Mail, Phone, } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../../assets/fontec-logo1-150x58.png";
// ── Animation Variants ──────────────────────────────────────────
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay, ease: "easeOut" },
    }),
};
const fadeLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: (delay = 0) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, delay, ease: "easeOut" },
    }),
};
const fadeRight = {
    hidden: { opacity: 0, x: 30 },
    visible: (delay = 0) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, delay, ease: "easeOut" },
    }),
};
// ── Payment Icons ────────────────────────────────────────────
const PaymentIcons = {
    Visa: () => (_jsx("div", { className: "font-black italic text-[#1434CB] text-[15px] tracking-tighter leading-none pr-0.5", children: "VISA" })),
    Mastercard: () => (_jsxs("div", { className: "flex items-center justify-center relative w-[26px] h-[16px]", children: [_jsx("div", { className: "w-4 h-4 rounded-full bg-[#EB001B] absolute left-0 mix-blend-multiply opacity-95" }), _jsx("div", { className: "w-4 h-4 rounded-full bg-[#F79E1B] absolute right-0 mix-blend-multiply opacity-95" })] })),
    UnionPay: () => (_jsxs("div", { className: "flex items-center gap-1.5", children: [_jsxs("div", { className: "flex items-center gap-[1px]", children: [_jsx("div", { className: "w-[7px] h-3 bg-[#e31837] skew-x-[-15deg] rounded-sm" }), _jsx("div", { className: "w-[7px] h-3 bg-[#004e94] skew-x-[-15deg] rounded-sm" }), _jsx("div", { className: "w-[7px] h-3 bg-[#007f7f] skew-x-[-15deg] rounded-sm" })] }), _jsx("span", { className: "font-bold text-[11px] tracking-tighter text-[#004e94] leading-none pt-0.5", children: "UnionPay" })] })),
    PayPak: () => (_jsx("div", { className: "text-[#00603f] font-black italic text-xs tracking-[-0.03em] leading-none", children: "PayPak" })),
    Raast: () => (_jsxs("div", { className: "flex items-center gap-0.5 font-bold text-[13px] text-[#00615F] leading-none tracking-tight", children: [_jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", className: "w-[14px] h-[14px] text-[#FDB913]", children: _jsx("path", { d: "M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4-6.2-4.5h7.6z" }) }), "raast"] })),
    Easypaisa: () => (_jsx("div", { className: "text-[#00A950] font-bold text-[12px] leading-none tracking-tight", children: "easypaisa" })),
    JazzCash: () => (_jsx("div", { className: "text-[#D01A22] font-black text-[12px] italic tracking-tight leading-none", children: "JazzCash" })),
    Upaisa: () => (_jsx("div", { className: "text-[#F05A28] font-black text-[12px] leading-none tracking-tight", children: "UPaisa" }))
};
// ── Footer Component ────────────────────────────────────────────
const Footer = () => {
    const shopLinks1 = [
        "All Products",
        "Earbuds",
        "Handsfree",
        "Neckband",
        "Headphones",
        "Power Bank",
        "Charger",
    ];
    const shopLinks2 = [
        "Smart Watch",
        "Data Cable",
        "Car Charger",
        "Laser Print",
        "Gift Store",
        "Corporate Orders",
    ];
    const helpLinks1 = [
        "Blogs",
        "News",
        "Privacy Policy",
        "Modes of Payment",
        "Terms and Condition",
        "Shipping and Return Policy",
    ];
    const helpLinks2 = [
        "Register a Complaint",
        "Track Your Order",
        "Claim and Services",
        "Warranty Policy",
        "Contact Us",
    ];
    const companyLinks = [
        "About Us",
        "Express Delivery",
        "Careers",
        "Official Brand Outlet",
        "Customer Care Center",
        "News & Updates",
    ];
    const socialLinks = [
        { icon: _jsx(Facebook, { size: 20 }), href: "#" },
        { icon: _jsx(Instagram, { size: 20 }), href: "#" },
        { icon: _jsx(Youtube, { size: 20 }), href: "#" },
        { icon: _jsx(Linkedin, { size: 20 }), href: "#" },
        { icon: _jsx(Twitter, { size: 20 }), href: "#" },
    ];
    const paymentMethods = [
        { name: "Visa", Icon: PaymentIcons.Visa },
        { name: "Mastercard", Icon: PaymentIcons.Mastercard },
        { name: "UnionPay", Icon: PaymentIcons.UnionPay },
        { name: "PayPak", Icon: PaymentIcons.PayPak },
        { name: "Raast", Icon: PaymentIcons.Raast },
        { name: "Easypaisa", Icon: PaymentIcons.Easypaisa },
        { name: "JazzCash", Icon: PaymentIcons.JazzCash },
        { name: "Upaisa", Icon: PaymentIcons.Upaisa },
    ];
    return (_jsxs("footer", { className: "bg-secondary text-white ", children: [_jsx("div", { className: "max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-12", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10", children: [_jsxs(motion.div, { variants: fadeLeft, initial: "hidden", whileInView: "visible", viewport: { once: true }, custom: 0, children: [_jsx("h3", { className: "text-sm font-bold tracking-widest uppercase mb-5 text-white", children: "Shop" }), _jsxs("div", { className: "grid grid-cols-2 gap-x-4 gap-y-3", children: [_jsx("ul", { className: "space-y-3", children: shopLinks1.map((item) => (_jsx(motion.li, { whileHover: { x: 4 }, transition: { duration: 0.15 }, children: _jsx("a", { href: "#", className: "text-gray-300 hover:text-white text-sm transition-colors duration-200", children: item }) }, item))) }), _jsx("ul", { className: "space-y-3", children: shopLinks2.map((item) => (_jsx(motion.li, { whileHover: { x: 4 }, transition: { duration: 0.15 }, children: _jsx("a", { href: "#", className: `text-sm transition-colors duration-200 ${item === "Car Charger" ? "font-bold text-white" : "text-gray-300 hover:text-white"}`, children: item }) }, item))) })] })] }), _jsxs(motion.div, { variants: fadeUp, initial: "hidden", whileInView: "visible", viewport: { once: true }, custom: 0.1, children: [_jsx("h3", { className: "text-sm font-bold tracking-widest uppercase mb-5 text-white", children: "Help" }), _jsxs("div", { className: "grid grid-cols-2 gap-x-4 gap-y-3", children: [_jsx("ul", { className: "space-y-3", children: helpLinks1.map((item) => (_jsx(motion.li, { whileHover: { x: 4 }, transition: { duration: 0.15 }, children: _jsx("a", { href: "#", className: "text-gray-300 hover:text-white text-sm transition-colors duration-200", children: item }) }, item))) }), _jsx("ul", { className: "space-y-3", children: helpLinks2.map((item) => (_jsx(motion.li, { whileHover: { x: 4 }, transition: { duration: 0.15 }, children: _jsx("a", { href: "#", className: "text-gray-300 hover:text-white text-sm transition-colors duration-200", children: item }) }, item))) })] })] }), _jsxs(motion.div, { variants: fadeUp, initial: "hidden", whileInView: "visible", viewport: { once: true }, custom: 0.2, children: [_jsx("h3", { className: "text-sm font-bold tracking-widest uppercase mb-5 text-white", children: "Company" }), _jsx("ul", { className: "space-y-3", children: companyLinks.map((item) => (_jsx(motion.li, { whileHover: { x: 4 }, transition: { duration: 0.15 }, children: _jsx("a", { href: "#", className: "text-gray-300 hover:text-white text-sm transition-colors duration-200", children: item }) }, item))) })] }), _jsxs(motion.div, { className: "lg:border-l lg:border-white/20 lg:pl-10", variants: fadeRight, initial: "hidden", whileInView: "visible", viewport: { once: true }, custom: 0.3, children: [_jsx(motion.div, { className: "text-3xl font-black tracking-widest uppercase mb-5 text-white", initial: { opacity: 0, scale: 0.8 }, whileInView: { opacity: 1, scale: 1 }, viewport: { once: true }, transition: { duration: 0.4, delay: 0.4 }, children: _jsx("img", { src: logo, alt: "Logo" }) }), _jsx("div", { className: "flex gap-4 mb-6", children: socialLinks.map((social, index) => (_jsx(motion.a, { href: social.href, className: "text-gray-300 hover:text-white transition-colors duration-200", initial: { opacity: 0, y: 10 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.3, delay: 0.4 + index * 0.07 }, whileHover: { scale: 1.25, y: -2 }, whileTap: { scale: 0.9 }, children: social.icon }, index))) }), _jsx("p", { className: "text-gray-300 text-sm mb-2", children: "We're here to help." }), _jsxs("div", { className: "flex items-center gap-2 mb-1", children: [_jsx(Phone, { size: 14, className: "text-gray-400" }), _jsx("p", { className: "text-sm font-semibold text-white", children: "021 111 176 646" })] }), _jsxs("div", { className: "flex items-center gap-2 mb-6", children: [_jsx(Mail, { size: 14, className: "text-gray-400" }), _jsx("p", { className: "text-sm font-semibold text-white", children: "Support@yoursite.pk" })] }), _jsx("p", { className: "text-sm font-bold text-white mb-3", children: "Get exclusive offer and updates" }), _jsxs("div", { className: "flex gap-2", children: [_jsx("input", { type: "email", placeholder: "Email Address", className: "flex-1 bg-transparent border border-white/40 rounded-md px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-white transition" }), _jsx(motion.button, { className: "bg-transparent border border-white/40 hover:bg-white hover:text-secondary text-white text-sm px-4 py-2 rounded-md transition-all duration-200 font-medium whitespace-nowrap", whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: "Submit" })] })] })] }) }), _jsx(motion.div, { className: "border-t border-white/10", initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.2 }, children: _jsxs("div", { className: "max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-6 flex flex-col lg:flex-row justify-between items-center gap-6", children: [_jsxs("p", { className: "text-gray-400 text-sm font-medium shrink-0", children: ["\u00A9 2026 ", _jsx("span", { className: "font-bold text-white", children: "YourBrand" }), " \u2013 All Rights Reserved"] }), _jsx("div", { className: "flex flex-wrap items-center justify-center lg:justify-end gap-2.5", children: paymentMethods.map((method, index) => (_jsxs(motion.div, { title: method.name, className: "bg-[#f8f9fa] h-[34px] px-3.5 rounded-md flex items-center justify-center shadow-sm hover:shadow-[0_0_15px_rgba(255,255,255,0.25)] hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden relative group", initial: { opacity: 0, y: 15 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.4, delay: index * 0.05 }, children: [_jsx("div", { className: "absolute inset-0 translate-x-[-100%] group-hover:animate-[shimmer_1s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" }), _jsx("div", { className: "relative z-10 flex items-center justify-center h-full", children: _jsx(method.Icon, {}) })] }, method.name))) })] }) })] }));
};
export default Footer;
