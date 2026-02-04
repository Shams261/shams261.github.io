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
        className="h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 flex items-center justify-center relative overflow-hidden"
      >
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full filter blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full filter blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
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
            {/* Main Content */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Shams
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-zinc-400 mb-4 font-light"
            >
              Full Stack Software Engineer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-zinc-500 mb-16 max-w-2xl mx-auto"
            >
              Passionate about building thoughtful digital experiences that
              leave a mark. Currently available for new opportunities worldwide.
            </motion.p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => {
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-zinc-500 text-sm font-medium">
              Scroll to explore
            </span>
            <FaArrowDown className="text-emerald-400 text-lg" />
          </div>
        </motion.div>
      </section>
    </ClientOnly>
  );
};

export default Hero;
