import { Star } from "lucide-react";
import { Link } from "react-router-dom";

export interface Product {
  id: string;
  tag: string;
  tagColor?: "blue" | "purple";
  title: string;
  description: string;
  image: string;
  rating: number;
  colors: string[];
  oldPrice: string;
  newPrice: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/product/${product.id}`} className="block h-full outline-none">
      <div className="bg-white rounded-2xl p-5 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(6,81,237,0.12)] transition-shadow duration-300 border border-slate-100 flex flex-col h-full group cursor-pointer relative z-0">
        {/* Tag */}
        <h4
          className={`text-xs font-bold tracking-wider uppercase mb-2 ${
            product.tagColor === "purple" ? "text-purple-500" : "text-blue-500"
          }`}
        >
          {product.tag}
        </h4>

        {/* Image */}
        <div className="relative aspect-square w-full py-4 mb-2 flex items-center justify-center overflow-hidden bg-slate-50/50 rounded-xl">
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            className="w-[85%] h-[85%] object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              // Fallback to a placeholder image if the source fails
              const target = e.target as HTMLImageElement;
              target.onerror = null; // Prevent infinite loop
              target.src =
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23cbd5e1'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' /%3E%3C/svg%3E";
              target.className =
                "w-[50%] h-[50%] object-contain mix-blend-multiply opacity-50";
            }}
          />
        </div>

        <div className="flex flex-col flex-grow">
          {/* Title */}
          <h3 className="font-bold text-slate-800 text-lg leading-tight mb-1 group-hover:text-blue-600 transition-colors">
            {product.title}
          </h3>

          {/* Description */}
          <p className="text-xs text-slate-500 line-clamp-1 mb-4">
            {product.description}
          </p>

          {/* Divider */}
          <div className="w-full h-px bg-slate-100 mb-4"></div>

          {/* Stars and Colors */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < product.rating ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"}`}
                />
              ))}
            </div>
            <div
              className="flex items-center gap-1.5"
              onClick={(e) => e.preventDefault()}
            >
              {product.colors.map((color, index) => (
                <div
                  key={index}
                  className="w-4 h-4 rounded-full border border-slate-300 ring-2 ring-transparent hover:ring-slate-300 transition-all cursor-pointer relative z-10"
                  style={{ backgroundColor: color }}
                  title={`Color option ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Price and Button */}
          <div className="flex items-center justify-between mt-auto pt-1">
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-400 line-through">
                {product.oldPrice}
              </span>
              <span className="text-lg font-bold text-slate-900">
                {product.newPrice}
              </span>
            </div>

            <button
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium text-sm px-8 py-2 rounded-full shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all active:scale-95 relative z-10"
              onClick={(e) => {
                // We're letting the link handle navigation, but preventing
                // nested button clicks from doing anything weird
                e.stopPropagation();
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
