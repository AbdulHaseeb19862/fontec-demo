import { Truck, Users, Award, ThumbsUp } from "lucide-react";

const features = [
  {
    icon: <Truck className="w-8 h-8 text-slate-700" strokeWidth={1.5} />,
    text: "Free Shipping Nationwide",
  },
  {
    icon: <Users className="w-8 h-8 text-slate-700" strokeWidth={1.5} />,
    text: "70M+ Satisfied Customer",
  },
  {
    icon: <Award className="w-8 h-8 text-slate-700" strokeWidth={1.5} />,
    text: "365 Days Warranty",
  },
  {
    icon: <ThumbsUp className="w-8 h-8 text-slate-700" strokeWidth={1.5} />,
    text: "Certified Products",
  },
];

const FeatureShowcase = () => {
  return (
    <section className="py-5 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Row 1: Features */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 lg:gap-24 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-4 group"
            >
              <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 group-hover:scale-110 transition-all duration-300">
                {feature.icon}
              </div>
              <p className="text-sm font-medium text-slate-800 tracking-wide">
                {feature.text}
              </p>
            </div>
          ))}
        </div>

        {/* Row 2: Product Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1: EMINENCE */}
          <div className="group relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-slate-900 to-black text-white p-8 md:p-10 flex flex-col justify-between shadow-2xl shadow-slate-900/20 min-h-[360px]">
            {/* Background Image / Decoration */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-200/40 via-transparent to-transparent pointer-events-none"></div>

            <div className="relative z-10 w-3/5">
              <div className="inline-block bg-white text-slate-900 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6">
                Newly Launch Earbuds
              </div>
              <p className="text-slate-400 text-sm font-medium mb-1">R-7050</p>
              <h3 className="text-4xl font-black tracking-tight mb-8 font-heading">
                EMINENCE
              </h3>

              <div className="flex gap-2">
                <span className="flex items-center gap-1.5 text-xs font-medium border border-slate-700 rounded-full px-3 py-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#EADDCA]"></div>
                  Beige
                </span>
                <span className="flex items-center gap-1.5 text-xs font-medium border border-slate-700 rounded-full px-3 py-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-black border border-slate-600"></div>
                  Black
                </span>
              </div>
            </div>

            {/* Product Image */}
            <div className="absolute right-[-10%] bottom-[-10%] w-[65%] h-[80%] flex items-end justify-end drop-shadow-2xl group-hover:scale-105 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop"
                alt="Eminence Earbuds"
                className="object-cover w-full h-full rounded-tl-full mix-blend-luminosity opacity-80"
                style={{
                  maskImage:
                    "linear-gradient(to right, transparent, black 30%)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent, black 30%)",
                }}
              />
            </div>
          </div>

          {/* Card 2: MAGNITUDE */}
          <div className="group relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#E8F0FA] to-[#C8DDF3] text-slate-900 p-8 md:p-10 flex flex-col justify-between shadow-xl shadow-blue-500/10 min-h-[360px]">
            <div className="relative z-10 w-2/3">
              <div className="inline-block bg-white text-blue-600 shadow-sm text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6">
                Software Based Headphones
              </div>
              <p className="text-blue-500/80 text-sm font-bold mb-1">R-1505</p>
              <h3 className="text-4xl font-black tracking-tight mb-6 font-heading text-blue-900">
                MAGNITUDE
              </h3>

              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold text-slate-600 bg-white/50 w-fit px-3 py-1 rounded-full backdrop-blur-sm">
                  5th Gen Dual Device Connectivity
                </span>
                <span className="text-xs font-semibold text-slate-600 bg-white/50 w-fit px-3 py-1 rounded-full backdrop-blur-sm">
                  Mood Tuned Sound
                </span>
              </div>
            </div>

            {/* Product Image */}
            <div className="absolute right-[-5%] bottom-[-5%] w-[55%] h-[85%] flex items-end justify-end drop-shadow-2xl group-hover:scale-105 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=800&auto=format&fit=crop"
                alt="Magnitude Headphones"
                className="object-cover w-[120%] h-[100%] rounded-tl-full mix-blend-multiply"
                style={{
                  maskImage:
                    "linear-gradient(to right, transparent, black 40%)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent, black 40%)",
                }}
              />
            </div>
          </div>

          {/* Card 3: MAGNUS */}
          <div className="group relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#9E8B7A] to-[#6A5A4A] text-white p-8 md:p-10 flex flex-col justify-between shadow-xl shadow-amber-900/10 min-h-[360px]">
            <div className="relative z-10 w-2/3">
              <div className="inline-block bg-white text-amber-800 text-[10px] shadow-sm font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6">
                Software Based Headphones
              </div>
              <p className="text-amber-100 text-sm font-medium mb-1">R-1520</p>
              <h3 className="text-4xl font-black tracking-tight mb-6 font-heading">
                MAGNUS
              </h3>

              <div className="flex flex-col gap-2">
                <span className="text-xs font-medium text-white/90 bg-black/20 w-fit px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
                  Active Noise Cancellation
                </span>
                <span className="text-xs font-medium text-white/90 bg-black/20 w-fit px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
                  Mood Tuned Sound
                </span>
              </div>
            </div>

            {/* Product Image */}
            <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[55%] h-[90%] flex items-center justify-end drop-shadow-2xl group-hover:scale-105 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop"
                alt="Magnus Headphones"
                className="object-cover w-full h-[120%] rounded-l-full mix-blend-overlay opacity-90"
                style={{
                  maskImage:
                    "linear-gradient(to right, transparent, black 20%)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent, black 20%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
