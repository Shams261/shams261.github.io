"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (window.scrollY > 50) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Connect", href: "#connect" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-zinc-900/90 backdrop-blur-xl border-b border-zinc-800/50 shadow-2xl shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo/Brand - Modern Typography */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <Link href="#home" className="group flex items-center space-x-2">
              <div className="relative">
                <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
                  SOFTWARE DEV
                </span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-blue-500 transition-all duration-300 group-hover:w-full"></div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation - Minimal & Clean */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="group relative py-2 px-1 text-sm font-medium tracking-wide transition-all duration-300"
                >
                  <span className="relative z-10 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                    {link.name}
                  </span>

                  {/* Hover Effect */}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>

                  {/* Background Hover Effect */}
                  <span className="absolute inset-0 rounded-lg bg-gray-100 dark:bg-gray-800 transform scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 -z-10"></span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA Button - Professional */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.a
              href="mailto:shamsshoaib261@gmail.com"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-medium text-sm rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25"
            >
              <span className="relative z-10">Let's Connect</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></div>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMenu}
            className="lg:hidden relative w-10 h-10 rounded-xl bg-zinc-800/50 backdrop-blur-sm flex items-center justify-center transition-colors duration-300 hover:bg-zinc-700/50"
            aria-label="Toggle menu"
          >
            <motion.div
              initial={false}
              animate={isOpen ? "open" : "closed"}
              className="w-5 h-5 relative"
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 6 },
                }}
                className="absolute top-1 left-0 w-full h-0.5 bg-gray-600 dark:bg-gray-300 transform origin-center transition-all duration-300"
              />
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                className="absolute top-2.5 left-0 w-full h-0.5 bg-gray-600 dark:bg-gray-300 transform transition-all duration-300"
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -6 },
                }}
                className="absolute top-4 left-0 w-full h-0.5 bg-gray-600 dark:bg-gray-300 transform origin-center transition-all duration-300"
              />
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation - Modern Slide Down */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-zinc-900/95 backdrop-blur-xl border-b border-zinc-800/50"
          >
            <div className="container mx-auto px-6 py-6">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="group flex items-center py-3 text-lg font-medium text-zinc-300 hover:text-white transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="relative">
                        {link.name}
                        <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                      </span>
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="pt-4 border-t border-gray-200 dark:border-gray-700"
                >
                  <a
                    href="mailto:shamsshoaib261@gmail.com"
                    className="flex items-center justify-center w-full py-3 px-6 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    Let's Connect
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
