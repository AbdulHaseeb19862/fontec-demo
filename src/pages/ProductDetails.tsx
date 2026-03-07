import { useParams, Link } from "react-router-dom";
import { Star, Truck, ShieldCheck, ArrowLeft, Heart, Share2, Plus, Minus, Check } from "lucide-react";
import { useState } from "react";
import { type Product } from "../components/ProductCard";

// Using the data from the previous sections, this would typically come from an API or central state
const allProducts: Product[] = [
    {
        id: "1",
        tag: "SOFTWARE EARBUDS",
        tagColor: "purple",
        title: "Vesper Earbuds",
        description: "Dual Connectivity | Gaming | ANC & ENC",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop",
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
        image: "https://images.unsplash.com/photo-1606220588913-b3eea8f5d14a?q=80&w=800&auto=format&fit=crop",
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
        image: "https://images.unsplash.com/photo-1606220838315-056192d5e921?q=80&w=800&auto=format&fit=crop",
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
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=800&auto=format&fit=crop",
        rating: 5,
        colors: ["#111827", "#EF4444"],
        oldPrice: "Rs.11,995",
        newPrice: "Rs.8,495",
    },
];

const ProductDetails = () => {
    const { id } = useParams();
    const product = allProducts.find((p) => p.id === id) || allProducts[0]; // fallback

    const [activeColor, setActiveColor] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [activeImage, setActiveImage] = useState(0);

    // Mock gallery images by tinting the main image
    const gallery = [product.image, product.image, product.image, product.image];

    return (
        <div className="bg-slate-50 min-h-screen pb-20 pt-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Breadcrumb & Navigation */}
                <div className="flex items-center gap-4 text-sm mb-8">
                    <Link to="/" className="text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-1">
                        <ArrowLeft className="w-4 h-4" /> Back to Home
                    </Link>
                    <span className="text-slate-300">/</span>
                    <span className="text-slate-500">{product.tag}</span>
                    <span className="text-slate-300">/</span>
                    <span className="font-semibold text-slate-800">{product.title}</span>
                </div>

                <div className="bg-white rounded-[2rem] p-6 lg:p-12 shadow-sm border border-slate-100 mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                        {/* Left Column: Image Gallery */}
                        <div className="flex flex-col-reverse md:flex-row gap-6">
                            {/* Thumbnails */}
                            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto no-scrollbar py-2 md:py-0 w-full md:w-24 shrink-0">
                                {gallery.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveImage(idx)}
                                        className={`relative w-20 h-20 md:w-full md:h-24 rounded-2xl overflow-hidden border-2 transition-all shrink-0 bg-slate-50 ${activeImage === idx ? "border-blue-500 ring-4 ring-blue-500/20" : "border-transparent hover:border-slate-300"
                                            }`}
                                    >
                                        <img
                                            src={img}
                                            alt="thumbnail"
                                            loading="lazy"
                                            className="w-full h-full object-contain mix-blend-multiply p-2"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.onerror = null;
                                                target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23cbd5e1'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' /%3E%3C/svg%3E";
                                                target.className = "w-[50%] h-[50%] object-contain mix-blend-multiply opacity-50 m-auto mt-4";
                                            }}
                                        />
                                    </button>
                                ))}
                            </div>

                            {/* Main Image */}
                            <div className="relative w-full aspect-square bg-slate-50 rounded-[2rem] flex items-center justify-center p-8 overflow-hidden group">
                                {/* Decorative glow */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                <img
                                    src={gallery[activeImage]}
                                    alt={product.title}
                                    loading="lazy"
                                    className="w-full h-full object-contain mix-blend-multiply drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.onerror = null;
                                        target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23cbd5e1'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' /%3E%3C/svg%3E";
                                        target.className = "w-[50%] h-[50%] object-contain mix-blend-multiply opacity-50";
                                    }}
                                />
                            </div>
                        </div>

                        {/* Right Column: Product Info */}
                        <div className="flex flex-col">
                            {/* Badges */}
                            <div className="flex items-center gap-3 mb-4">
                                <span className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full ${product.tagColor === 'purple' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                                    }`}>
                                    {product.tag}
                                </span>
                                <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-green-100 text-green-700 flex items-center gap-1">
                                    <Check className="w-3 h-3" /> In Stock
                                </span>
                            </div>

                            {/* Title & Reviews */}
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-heading tracking-tight mb-4">
                                {product.title}
                            </h1>

                            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-5 h-5 ${i < product.rating ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"}`}
                                        />
                                    ))}
                                    <span className="ml-2 text-sm font-semibold text-slate-700">4.9</span>
                                </div>
                                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                <a href="#reviews" className="text-sm font-medium text-blue-600 hover:underline">
                                    128 Reviews
                                </a>
                            </div>

                            {/* Price */}
                            <div className="flex items-end gap-4 mb-8">
                                <span className="text-4xl font-black text-slate-900">{product.newPrice}</span>
                                <span className="text-xl text-slate-400 font-medium line-through mb-1">{product.oldPrice}</span>
                                <span className="text-sm font-bold text-red-500 bg-red-50 px-2 py-1 rounded-md mb-2">Save 25%</span>
                            </div>

                            {/* Description & Features */}
                            <p className="text-slate-600 mb-8 leading-relaxed max-w-lg">
                                Experience premium sound quality with the {product.title}. Featuring advanced noise cancellation and ultra-low latency technology for an immersive audio experience.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-8 max-w-lg">
                                {product.description.split(' | ').map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-2 text-sm font-medium text-slate-700 bg-slate-50 px-4 py-3 rounded-xl border border-slate-100">
                                        <Check className="w-4 h-4 text-blue-500 shrink-0" />
                                        {feature}
                                    </div>
                                ))}
                            </div>

                            {/* Color Selection */}
                            <div className="mb-8">
                                <h3 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">Color Available</h3>
                                <div className="flex gap-3">
                                    {product.colors.map((color, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setActiveColor(idx)}
                                            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${activeColor === idx ? "ring-2 ring-blue-500 ring-offset-2 scale-110" : "hover:scale-110 ring-1 ring-slate-200"
                                                }`}
                                            style={{ backgroundColor: color }}
                                        >
                                            {activeColor === idx && (
                                                <Check className={`w-5 h-5 ${['#F8F9FA', '#F3F4F6'].includes(color) ? 'text-slate-900' : 'text-white'}`} />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Quantity & Actions */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-10">
                                <div className="flex items-center justify-between border border-slate-200 rounded-full bg-white px-2 h-14 w-full sm:w-40 shrink-0 shadow-sm">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="w-10 h-10 flex items-center justify-center text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                                    >
                                        <Minus className="w-4 h-4" />
                                    </button>
                                    <span className="font-bold text-slate-900">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="w-10 h-10 flex items-center justify-center text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                                    >
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>

                                <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-lg h-14 rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all active:scale-[0.98]">
                                    Add to Cart
                                </button>

                                <div className="flex gap-2 shrink-0">
                                    <button className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-red-500 hover:border-red-200 transition-all">
                                        <Heart className="w-5 h-5" />
                                    </button>
                                    <button className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-blue-500 hover:border-blue-200 transition-all">
                                        <Share2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Perks */}
                            <div className="flex flex-col gap-3 py-6 border-t border-slate-100">
                                <div className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                                    <Truck className="w-5 h-5 text-slate-400" /> Free Shipping Nationwide
                                </div>
                                <div className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                                    <ShieldCheck className="w-5 h-5 text-slate-400" /> 365 Days Warranty Included
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductDetails;
