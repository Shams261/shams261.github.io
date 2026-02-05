"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import ClientOnly from "./ClientOnly";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <ClientOnly>
      <section
        id="home"
        className="min-h-screen flex items-center relative overflow-hidden bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-24 sm:py-32 relative z-10 w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Top Row - Status & Location */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 sm:mb-12"
            >
              <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-green-50 text-green-700 rounded-full text-xs sm:text-sm font-medium">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse" />
                Available for work
              </span>
              <span className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-500">
                <MapPin size={12} className="sm:w-[14px] sm:h-[14px]" />
                Toronto, Canada
              </span>
            </motion.div>

            {/* Main Name - Large Typography */}
            <motion.div variants={itemVariants} className="mb-8">
              <h1 className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] font-bold text-black leading-[0.85] tracking-tighter">
                SHAMS
              </h1>
              <h1 className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] font-bold text-gray-300 leading-[0.85] tracking-tighter">
                TABREZ
              </h1>
            </motion.div>

            {/* Description Row */}
            <motion.div
              variants={itemVariants}
              className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16"
            >
              {/* Left - Description */}
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                Software engineer with 3+ years of experience building and
                optimizing full stack SAAS applications, with a strong focus on
                performance, reliability, and developer productivity.
                Experienced in React, Node.js, backend APIs and AI-driven
                products deployed in production environments.
              </p>

              {/* Right - Stats */}
              <div className="flex flex-wrap items-start gap-6 sm:gap-8">
                {[
                  { value: "3+", label: "Years at Accenture" },
                  { value: "MS", label: "Computer Science" },
                  {
                    value: "🏆",
                    label: "Hackathon Winner",
                  },
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-3xl sm:text-4xl font-bold text-black">
                      {stat.value}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-500">{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={() =>
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <div className="w-5 h-8 border-2 border-gray-300 rounded-full flex justify-center pt-1.5">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-1.5 bg-gray-400 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>
    </ClientOnly>
  );
};

export default Hero;
