import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
  Mail,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";
import logo from "../../assets/fontec-logo1-150x58.png";

// ── Animation Variants ──────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" as any },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" as any },
  }),
};

const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" as any },
  }),
};

// ── Payment Icons ────────────────────────────────────────────
const PaymentIcons = {
  Visa: () => (
    <div className="font-black italic text-[#1434CB] text-[15px] tracking-tighter leading-none pr-0.5">VISA</div>
  ),
  Mastercard: () => (
    <div className="flex items-center justify-center relative w-[26px] h-[16px]">
      <div className="w-4 h-4 rounded-full bg-[#EB001B] absolute left-0 mix-blend-multiply opacity-95"></div>
      <div className="w-4 h-4 rounded-full bg-[#F79E1B] absolute right-0 mix-blend-multiply opacity-95"></div>
    </div>
  ),
  UnionPay: () => (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-[1px]">
        <div className="w-[7px] h-3 bg-[#e31837] skew-x-[-15deg] rounded-sm"></div>
        <div className="w-[7px] h-3 bg-[#004e94] skew-x-[-15deg] rounded-sm"></div>
        <div className="w-[7px] h-3 bg-[#007f7f] skew-x-[-15deg] rounded-sm"></div>
      </div>
      <span className="font-bold text-[11px] tracking-tighter text-[#004e94] leading-none pt-0.5">UnionPay</span>
    </div>
  ),
  PayPak: () => (
    <div className="text-[#00603f] font-black italic text-xs tracking-[-0.03em] leading-none">PayPak</div>
  ),
  Raast: () => (
    <div className="flex items-center gap-0.5 font-bold text-[13px] text-[#00615F] leading-none tracking-tight">
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px] text-[#FDB913]">
        <path d="M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4-6.2-4.5h7.6z" />
      </svg>
      raast
    </div>
  ),
  Easypaisa: () => (
    <div className="text-[#00A950] font-bold text-[12px] leading-none tracking-tight">easypaisa</div>
  ),
  JazzCash: () => (
    <div className="text-[#D01A22] font-black text-[12px] italic tracking-tight leading-none">JazzCash</div>
  ),
  Upaisa: () => (
    <div className="text-[#F05A28] font-black text-[12px] leading-none tracking-tight">UPaisa</div>
  )
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
    { icon: <Facebook size={20} />, href: "#" },
    { icon: <Instagram size={20} />, href: "#" },
    { icon: <Youtube size={20} />, href: "#" },
    { icon: <Linkedin size={20} />, href: "#" },
    { icon: <Twitter size={20} />, href: "#" },
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

  return (
    <footer className="bg-secondary text-white ">
      {/* ── Main Footer ── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* SHOP */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <h3 className="text-sm font-bold tracking-widest uppercase mb-5 text-white">
              Shop
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              <ul className="space-y-3">
                {shopLinks1.map((item) => (
                  <motion.li
                    key={item}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.15 }}
                  >
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <ul className="space-y-3">
                {shopLinks2.map((item) => (
                  <motion.li
                    key={item}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.15 }}
                  >
                    <a
                      href="#"
                      className={`text-sm transition-colors duration-200 ${item === "Car Charger" ? "font-bold text-white" : "text-gray-300 hover:text-white"}`}
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* HELP */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.1}
          >
            <h3 className="text-sm font-bold tracking-widest uppercase mb-5 text-white">
              Help
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              <ul className="space-y-3">
                {helpLinks1.map((item) => (
                  <motion.li
                    key={item}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.15 }}
                  >
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <ul className="space-y-3">
                {helpLinks2.map((item) => (
                  <motion.li
                    key={item}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.15 }}
                  >
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* COMPANY */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
          >
            <h3 className="text-sm font-bold tracking-widest uppercase mb-5 text-white">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.15 }}
                >
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT — Logo, Social, Contact, Newsletter */}
          <motion.div
            className="lg:border-l lg:border-white/20 lg:pl-10"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.3}
          >
            {/* Brand Name / Logo */}
            <motion.div
              className="text-3xl font-black tracking-widest uppercase mb-5 text-white"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <img src={logo} alt="Logo" />
            </motion.div>

            {/* Social Icons */}
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.07 }}
                  whileHover={{ scale: 1.25, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Contact */}
            <p className="text-gray-300 text-sm mb-2">We're here to help.</p>
            <div className="flex items-center gap-2 mb-1">
              <Phone size={14} className="text-gray-400" />
              <p className="text-sm font-semibold text-white">
                021 111 176 646
              </p>
            </div>
            <div className="flex items-center gap-2 mb-6">
              <Mail size={14} className="text-gray-400" />
              <p className="text-sm font-semibold text-white">
                Support@yoursite.pk
              </p>
            </div>

            {/* Newsletter */}
            <p className="text-sm font-bold text-white mb-3">
              Get exclusive offer and updates
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 bg-transparent border border-white/40 rounded-md px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-white transition"
              />
              <motion.button
                className="bg-transparent border border-white/40 hover:bg-white hover:text-secondary text-white text-sm px-4 py-2 rounded-md transition-all duration-200 font-medium whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <motion.div
        className="border-t border-white/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-6 flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-gray-400 text-sm font-medium shrink-0">
            © 2026 <span className="font-bold text-white">YourBrand</span> – All
            Rights Reserved
          </p>

          {/* Payment Badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-2.5">
            {paymentMethods.map((method, index) => (
              <motion.div
                key={method.name}
                title={method.name}
                className="bg-[#f8f9fa] h-[34px] px-3.5 rounded-md flex items-center justify-center shadow-sm hover:shadow-[0_0_15px_rgba(255,255,255,0.25)] hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden relative group"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                {/* Subtle sheen effect on hover */}
                <div className="absolute inset-0 translate-x-[-100%] group-hover:animate-[shimmer_1s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                <div className="relative z-10 flex items-center justify-center h-full">
                  <method.Icon />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
