import { useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowRight, Search } from "lucide-react";
import ProductCard, { type Product } from "./ProductCard";

const products: Product[] = [
    {
        id: "1",
        tag: "SOFTWARE EARBUDS",
        tagColor: "purple",
        title: "Vesper Earbuds",
        description: "Dual Connectivity | Gaming | ANC & ENC",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=600&auto=format&fit=crop",
        rating: 5,
        colors: ["#111827", "#3B82F6"],
        oldPrice: "Rs.7,595",
        newPrice: "Rs.6,295",
    },
    {
        id: "2",
        tag: "SOFTWARE BASED",
        tagColor: "purple",
        title: "Magnitude Headphones",
        description: "Mood Tuned Sound | Massive Bass | Soft Cushion",
        image: "/headphone-cream.png",
        rating: 5,
        colors: ["#EADAC2", "#111827"],
        oldPrice: "Rs.8,995",
        newPrice: "Rs.6,595",
    },
    {
        id: "3",
        tag: "SOFTWARE EARBUDS",
        tagColor: "purple",
        title: "Eclipse Earbuds",
        description: "Hyper ANC | AI ENC (QnX) | Up to 80 Hr",
        image: "https://images.unsplash.com/photo-1606220588913-b3eea8f5d14a?q=80&w=600&auto=format&fit=crop",
        rating: 5,
        colors: ["#111827", "#F3F4F6"],
        oldPrice: "Rs.8,995",
        newPrice: "Rs.6,895",
    },
    {
        id: "4",
        tag: "SOFTWARE EARBUDS",
        tagColor: "purple",
        title: "Eminence Earbuds",
        description: "Hybrid ANC | Qnx ENC | Ultra Low Latency",
        image: "https://images.unsplash.com/photo-1606220838315-056192d5e921?q=80&w=600&auto=format&fit=crop",
        rating: 5,
        colors: ["#FDF1EB", "#111827"],
        oldPrice: "Rs.7,595",
        newPrice: "Rs.5,795",
    },
    {
        id: "5",
        tag: "GAMING HEADPHONES",
        tagColor: "blue",
        title: "Hurricane Headphones",
        description: "25ms Ultra-Low Latency | Gaming Mode",
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=600&auto=format&fit=crop",
        rating: 5,
        colors: ["#111827", "#EF4444"],
        oldPrice: "Rs.11,995",
        newPrice: "Rs.8,495",
    },
];

const categories = [
    "All Products",
    "Earbuds",
    "Headphones",
    "Gaming Headphones",
    "Software Based Audio",
];

const TopTrending = () => {
    const [activeCategory, setActiveCategory] = useState("All Products");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            // Feature matching:
            // Map visual categories to data categories roughly based on title or tag
            const matchesCategory =
                activeCategory === "All Products" ||
                (activeCategory === "Earbuds" && product.tag.includes("EARBUDS")) ||
                (activeCategory === "Headphones" && product.title.includes("Headphones")) ||
                (activeCategory === "Gaming Headphones" && product.tag.includes("GAMING")) ||
                (activeCategory === "Software Based Audio" && product.tag.includes("SOFTWARE"));

            const searchLower = searchQuery.toLowerCase();
            const matchesSearch =
                product.title.toLowerCase().includes(searchLower) ||
                product.tag.toLowerCase().includes(searchLower);

            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);

    return (
        <section className="bg-slate-50 relative pb-16 md:pb-24 pt-8 border-t border-slate-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Search and Filter Row */}
                <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-12">

                    {/* Categories Tab */}
                    <div className="flex -mx-4 px-4 sm:mx-0 sm:px-0 overflow-x-auto pb-2 sm:pb-0 w-full lg:w-max no-scrollbar gap-2 hide-scrollbar">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === category
                                        ? "bg-slate-900 text-white shadow-md shadow-slate-900/20"
                                        : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-full lg:w-72 shrink-0">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-4 w-4 text-slate-400" />
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-full text-sm text-slate-900 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none placeholder:text-slate-400 shadow-sm"
                            placeholder="Search products or categories..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                </div>

                {/* Header */}
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 font-heading">
                        TOP <span className="text-blue-600">TRENDING</span>
                    </h2>

                    <a
                        href="#"
                        className="group flex items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                    >
                        View All
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                {/* Swiper Carousel */}
                <div className="relative group/slider-trending min-h-[440px]">
                    {filteredProducts.length > 0 ? (
                        <Swiper
                            key={`${activeCategory}-${searchQuery}`} // Force re-render on filter change for proper swiper layout
                            modules={[Navigation, Autoplay]}
                            spaceBetween={24}
                            slidesPerView={1.2}
                            navigation={{
                                nextEl: ".swiper-button-next-trending",
                                prevEl: ".swiper-button-prev-trending",
                            }}
                            autoplay={{
                                delay: 4500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
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
                            }}
                            className="pb-12 !pt-4 !px-4 -mx-4"
                        >
                            {filteredProducts.map((product) => (
                                <SwiperSlide key={product.id} className="h-auto pb-4">
                                    <ProductCard product={product} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-20 text-center">
                            <p className="text-slate-500 text-lg mb-2">No products found matching your search.</p>
                            <button
                                onClick={() => { setSearchQuery(""); setActiveCategory("All Products") }}
                                className="text-blue-600 font-medium hover:underline"
                            >
                                Clear filters
                            </button>
                        </div>
                    )}

                    {/* Custom Navigation Buttons (Visible on Hover/Desktop) */}
                    {filteredProducts.length > 0 && (
                        <>
                            <button className="swiper-button-prev-trending absolute left-0 top-[45%] -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-[0_4px_20px_-4px_rgba(0,0,0,0.15)] flex items-center justify-center text-slate-700 hover:text-blue-600 hover:scale-110 transition-all opacity-0 group-hover/slider-trending:opacity-100 hidden md:flex disabled:opacity-0 disabled:pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                            </button>
                            <button className="swiper-button-next-trending absolute right-0 top-[45%] -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-[0_4px_20px_-4px_rgba(0,0,0,0.15)] flex items-center justify-center text-slate-700 hover:text-blue-600 hover:scale-110 transition-all opacity-0 group-hover/slider-trending:opacity-100 hidden md:flex disabled:opacity-0 disabled:pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default TopTrending;
