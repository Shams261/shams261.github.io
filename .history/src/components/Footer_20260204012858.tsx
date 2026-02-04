"use client";

import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(2024);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const socialLinks = [
    {
      icon: <FaLinkedin size={24} />,
      url: "https://www.linkedin.com/in/shamstabrez-ca/",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub size={24} />,
      url: "https://github.com/Shams261",
      label: "GitHub",
    },
    {
      icon: <FaEnvelope size={24} />,
      url: "mailto:shamsshoaib261@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer id="connect" className="bg-zinc-950 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-emerald-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-zinc-300 hover:text-emerald-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-zinc-300 hover:text-emerald-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-zinc-300 hover:text-emerald-400 transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-zinc-300 hover:text-emerald-400 transition-colors"
                >
                  Experience
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start md:items-end space-y-4">
            <h3 className="text-xl font-bold text-emerald-400">
              Connect With Me
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="bg-zinc-800 hover:bg-emerald-600 text-white p-3 rounded-full ring-2 ring-transparent hover:ring-emerald-500 transition"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-gray-300 text-sm text-center md:text-right">
              Feel free to reach out for collaborations or just a friendly chat!
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} Shams Tabrez. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
