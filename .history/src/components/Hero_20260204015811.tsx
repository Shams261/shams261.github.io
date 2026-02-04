"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowDown } from "react-icons/fa";
import ClientOnly from "./ClientOnly";

const Hero = () => {
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

  return (
    <ClientOnly>
      <section
        id="home"
        className="h-screen bg-black flex items-center justify-center relative overflow-hidden"
      >
        {/* Subtle Background Elements */}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-neutral-800/5 rounded-full filter blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 leading-tight tracking-tight"
            >
              SHAMS
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-neutral-400 mb-4 font-light tracking-wide"
            >
              Full Stack Software Engineer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-neutral-500 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Open to job opportunities worldwide. Passionate about building
              polished, intuitive, and thoughtful digital experiences that leave
              a mark.
            </motion.p>

            {/* Key Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">
                  MS in CS
                </div>
                <div className="text-sm text-neutral-500">
                  Lakehead University • 3.89 GPA
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">
                  2+ Years
                </div>
                <div className="text-sm text-neutral-500">
                  Software Engineer at Accenture
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">
                  🏆 Winner
                </div>
                <div className="text-sm text-neutral-500">
                  AI Hackathon • Verity Project
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => {
            document
              .getElementById("services")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-neutral-600 text-xs font-medium tracking-wider uppercase">
              Scroll to explore
            </span>
            <div className="w-px h-8 bg-neutral-700"></div>
          </div>
        </motion.div>
      </section>
    </ClientOnly>
  );
};

export default Hero;
