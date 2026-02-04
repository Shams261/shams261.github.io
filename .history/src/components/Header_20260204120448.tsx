"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Experience", href: "#experience" },
    { name: "Work", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#connect" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed w-full z-50 px-4 pt-4"
    >
      {/* iPhone-style floating navbar */}
      <div
        className={`max-w-4xl mx-auto transition-all duration-500 ${
          scrolled
            ? "bg-white/70 backdrop-blur-2xl shadow-lg shadow-black/5 border border-white/20"
            : "bg-white/50 backdrop-blur-xl border border-gray-200/50"
        } rounded-full px-2`}
      >
        <div className="flex justify-between items-center h-14 px-4">
          {/* Left - Title */}
          <span className="text-xs font-medium text-gray-500 tracking-wide hidden sm:block">
            Software Engineer
          </span>

          {/* Center - Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-gray-600 hover:text-black transition-colors duration-300 group rounded-full hover:bg-black/5"
              >
                <span className="relative z-10">{link.name}</span>
              </Link>
            ))}
          </nav>

          {/* Right - CTA Button */}
          <div className="hidden lg:block">
            <a
              href="mailto:shamsshoaib261@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-all duration-300"
            >
              Let's Talk
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 17L17 7M17 7H7M17 7V17"
                />
              </svg>
            </a>
          </div>

          {/* Mobile - Logo & Menu */}
          <span className="text-sm font-bold text-black lg:hidden">
            Shams<span className="text-gray-400">.</span>
          </span>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <div className="w-4 h-3 relative flex flex-col justify-between">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-[2px] bg-black origin-center"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="w-full h-[2px] bg-black"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-[2px] bg-black origin-center"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden absolute left-4 right-4 top-20 bg-white/90 backdrop-blur-2xl rounded-3xl shadow-xl border border-gray-200/50 overflow-hidden"
          >
            <div className="flex flex-col p-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className="block py-3 px-4 text-lg font-medium text-gray-800 hover:text-black hover:bg-black/5 rounded-xl transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
                href="mailto:shamsshoaib261@gmail.com"
                className="mt-2 mx-4 py-3 bg-black text-white text-center font-medium rounded-full"
                onClick={() => setIsOpen(false)}
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
