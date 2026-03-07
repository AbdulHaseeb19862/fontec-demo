import { useState } from "react";
import logo from "../../assets/fontec-logo1-150x58.png";
import { Menu, X, Search, User, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Biggest Grand Eid Sale", href: "#" },
    { label: "Audio & Buds", href: "#" },
    { label: "Smart Watches", href: "#" },
    { label: "Charging Devices", href: "#" },
    { label: "Accessories", href: "#" },
    { label: "Shop All", href: "#" },
  ];

  return (
    <>
      {/* Navbar - slide down on load */}
      <motion.nav
        className="bg-primary fixed top-0 left-0 w-full z-50 shadow-md"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="flex justify-between items-center h-16 md:h-20 px-5 sm:px-10 lg:px-20 text-white">
          {/* Logo - fade in */}
          <motion.a
            href="#"
            className="flex items-center gap-2 text-2xl lg:text-3xl font-serif text-white no-underline"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img src={logo} alt="Fontec Logo" />
          </motion.a>

          {/* Desktop Nav Links */}
          <div className="flex gap-8">
            <ul className="hidden lg:flex items-center gap-8 text-xs font-heading list-none">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
                >
                  <a
                    href={link.href}
                    className="text-white no-underline hover:underline transition"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Actions */}
            <motion.div
              className="flex items-center gap-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {/* Icons */}
              <div className="flex gap-6">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Search size={20} className="cursor-pointer hidden lg:flex" />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <User size={20} className="hidden lg:flex cursor-pointer" />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ShoppingCart size={20} className="cursor-pointer" />
                </motion.div>
              </div>

              {/* Hamburger Button - Mobile Only */}
              <motion.button
                className="lg:hidden flex items-center justify-center w-9 h-9 text-white bg-transparent border-none rounded-md cursor-pointer hover:bg-white/20 transition"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                whileTap={{ scale: 0.85 }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {menuOpen ? (
                    <motion.span
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="open"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Dropdown Menu - slide down animation */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="lg:hidden bg-secondary text-white px-4 py-3 flex flex-col gap-1 border-t border-white/10 overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-white no-underline px-4 py-2 rounded-md hover:bg-gray-700 transition text-base"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: 0.05 * index }}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
