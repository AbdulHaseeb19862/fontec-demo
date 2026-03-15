import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";
const products = [
    {
        id: "1",
        tag: "NEWLY LAUNCHED",
        tagColor: "blue",
        title: "AQUA | 20,000mAh Powerbank",
        description: "22.5 Watt Max | Attached Cable: iPhone & Type-C",
        image: "/powerbank-blue.png",
        rating: 5,
        colors: ["#D4E5FA", "#F8F9FA"],
        oldPrice: "Rs.10,475",
        newPrice: "Rs.7,975",
    },
    {
        id: "2",
        tag: "NEWLY LAUNCHED",
        tagColor: "blue",
        title: "Synergy | 10,000mAh Powerbank",
        description: "22.5 Watt Max | 15 Watt Wireless Charging",
        image: "/powerbank-grey.png",
        rating: 5,
        colors: ["#B0B5B9", "#111827"],
        oldPrice: "Rs.9,495",
        newPrice: "Rs.6,995",
    },
    {
        id: "3",
        tag: "SOFTWARE BASED",
        tagColor: "purple",
        title: "Magnitude Headphone",
        description: "Mood Tuned Sound | Massive Bass | Soft Cushion",
        image: "/headphone-cream.png",
        rating: 5,
        colors: ["#EADAC2", "#111827"],
        oldPrice: "Rs.8,995",
        newPrice: "Rs.6,595",
    },
    {
        id: "4",
        tag: "SOFTWARE BASED",
        tagColor: "purple",
        title: "Bang Headphone",
        description: "5th GEN Dual Device Connectivity | Mood Tuned",
        image: "/headphone-navy.png",
        rating: 5,
        colors: ["#1D3557", "#111827"],
        oldPrice: "Rs.7,995",
        newPrice: "Rs.5,695",
    },
    {
        id: "5",
        tag: "NEWLY LAUNCHED",
        tagColor: "blue",
        title: "AQUA Mini | 10,000mAh",
        description: "Ultra Compact | 20 Watt PD | Pocket Size",
        image: "/powerbank-blue.png",
        rating: 5,
        colors: ["#D4E5FA", "#111827"],
        oldPrice: "Rs.6,475",
        newPrice: "Rs.4,975",
    },
];
const NewArrivals = () => {
    return (_jsx("section", { className: "bg-slate-50 py-5", children: _jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "flex items-center justify-between mb-10", children: [_jsxs("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight text-slate-900 font-heading", children: ["NEW ", _jsx("span", { className: "text-blue-600", children: "ARRIVALS" })] }), _jsxs("a", { href: "#", className: "group flex items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors", children: ["View All", _jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })] })] }), _jsxs("div", { className: "relative group/slider", children: [_jsx(Swiper, { modules: [Navigation, Autoplay], spaceBetween: 24, slidesPerView: 1.2, navigation: {
                                nextEl: ".swiper-button-next-custom",
                                prevEl: ".swiper-button-prev-custom",
                            }, autoplay: {
                                delay: 4000,
                                disableOnInteraction: false,
                            }, breakpoints: {
                                640: {
                                    slidesPerView: 2.2,
                                    spaceBetween: 24,
                                },
                                1024: {
                                    slidesPerView: 3.5,
                                    spaceBetween: 32,
                                },
                                1280: {
                                    slidesPerView: 4,
                                    spaceBetween: 32,
                                },
                            }, className: "pb-12 !pt-4 !px-4 -mx-4", children: products.map((product) => (_jsx(SwiperSlide, { className: "h-auto pb-4", children: _jsx(ProductCard, { product: product }) }, product.id))) }), _jsx("button", { className: "swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-700 hover:text-blue-600 hover:scale-110 transition-all opacity-0 group-hover/slider:opacity-100 hidden md:flex disabled:opacity-0", children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 2.5, stroke: "currentColor", className: "w-5 h-5", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 19.5L8.25 12l7.5-7.5" }) }) }), _jsx("button", { className: "swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-700 hover:text-blue-600 hover:scale-110 transition-all opacity-0 group-hover/slider:opacity-100 hidden md:flex disabled:opacity-0", children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 2.5, stroke: "currentColor", className: "w-5 h-5", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M8.25 4.5l7.5 7.5-7.5 7.5" }) }) })] })] }) }));
};
export default NewArrivals;
