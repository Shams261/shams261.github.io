"use client";

import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
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
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32 relative z-10 w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Top Row - Status & Location */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Available for work
              </span>
              <span className="inline-flex items-center gap-2 text-sm text-gray-500">
                <FaMapMarkerAlt size={14} />
                Toronto, Canada
              </span>
            </motion.div>

            {/* Main Name - Large Typography */}
            <motion.div variants={itemVariants} className="mb-8">
              <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-bold text-black leading-[0.85] tracking-tighter">
                SHAMS
              </h1>
              <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-bold text-gray-300 leading-[0.85] tracking-tighter">
                TABREZ
              </h1>
            </motion.div>

            {/* Description Row */}
            <motion.div
              variants={itemVariants}
              className="grid lg:grid-cols-2 gap-8 lg:gap-16"
            >
              {/* Left - Description */}
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                Full Stack Software Engineer passionate about building polished,
                intuitive AI-powered applications and scalable systems that
                leave a mark.
              </p>

              {/* Right - Stats */}
              <div className="flex flex-wrap items-start gap-8">
                {[
                  { value: "3+", label: "Years at Accenture" },
                  { value: "MS", label: "Computer Science" },
                  {
                    value: "🏆",
                    label: "Hackathon Winner",
                  },
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-4xl font-bold text-black">
                      {stat.value}
                    </span>
                    <span className="text-sm text-gray-500">{stat.label}</span>
                    {stat.sublabel && (
                      <span className="text-xs text-gray-400">
                        {stat.sublabel}
                      </span>
                    )}
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
