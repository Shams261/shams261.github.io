"use client";

import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaArrowRight } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const [currentYear, setCurrentYear] = useState(2024);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: <FaLinkedin size={20} />,
      url: "https://www.linkedin.com/in/shamstabrez-ca/",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub size={20} />,
      url: "https://github.com/Shams261",
      label: "GitHub",
    },
    {
      icon: <FaEnvelope size={20} />,
      url: "mailto:shamsshoaib261@gmail.com",
      label: "Email",
    },
  ];

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
  ];

  return (
    <>
      <footer id="connect" className="relative overflow-hidden">
        {/* CTA Section */}
        <div className="bg-black text-white py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl"
            >
              <span className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-6 block">
                Get in Touch
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-8">
                Let's work together on your next project
              </h2>
              <p className="text-xl text-gray-400 mb-10 max-w-2xl">
                I'm currently open to new opportunities and collaborations.
                Whether you have a project in mind or just want to connect, feel free to reach out.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="mailto:shamsshoaib261@gmail.com"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-all duration-300"
                >
                  <FaEnvelope size={18} />
                  <span>shamsshoaib261@gmail.com</span>
                  <FaArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <div className="flex items-center gap-3">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-700 text-gray-400 hover:text-white hover:border-white transition-all duration-300"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-gray-950 py-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Logo */}
              <a href="#home" className="text-2xl font-bold text-white hover:opacity-70 transition-opacity duration-300">
                Shams<span className="text-gray-500">.</span>
              </a>

              {/* Nav Links */}
              <nav className="flex items-center gap-8">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              {/* Copyright */}
              <p className="text-sm text-gray-600">
                © {currentYear} Shams Tabrez
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-black text-white shadow-2xl hover:bg-gray-800 transition-all duration-300 btn-hover"
            aria-label="Scroll to top"
          >
            <FaArrowUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;
