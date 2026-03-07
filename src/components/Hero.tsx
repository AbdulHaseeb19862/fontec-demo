import { ArrowRight, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 min-h-[85vh] flex items-center">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content Area */}
          <div className="max-w-2xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-pulse-slow">
              <span className="flex h-2 w-2 rounded-full bg-primary"></span>
              New Next-Gen Power Delivery
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6 font-heading">
              Power Up Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
                Tech Life
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl font-body">
              Discover premium electronic accessories designed for speed, durability, and style. From ultra-fast chargers to heavy-duty cables, stay connected wherever you go.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-14 px-8 text-base rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 group hover:-translate-y-1">
                <ShoppingBag className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base rounded-full border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 group">
                View Products
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="mt-10 flex items-center gap-6 text-sm text-slate-500 font-medium pb-2">
               <div className="flex items-center gap-2">
                 <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                 100% Safe Checkout
               </div>
               <div className="flex items-center gap-2">
                 <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                 Free Shipping
               </div>
            </div>
          </div>

          {/* Right Image Area */}
          <div className="relative flex justify-center lg:justify-end items-center animate-fade-in">
            {/* Soft decorative glow behind the image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl scale-90 mix-blend-multiply" />
            
            <img
              src="/hero-image.png"
              alt="Premium fast chargers, cables, and power accessories in a modern 3D showcase"
              className="relative z-10 w-full max-w-lg lg:max-w-xl xl:max-w-2xl object-contain drop-shadow-2xl animate-float"
              style={{
                filter: "drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
