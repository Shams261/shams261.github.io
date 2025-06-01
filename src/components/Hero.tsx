"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import profileImage from "../profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="py-16 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 md:order-1"
          >
            {/* Animated Name */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-3 flex flex-wrap">
              Hi, I&apos;m{" "}
              <motion.span
                className="text-indigo-600 dark:text-indigo-400 ml-2 flex"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.06,
                    },
                  },
                }}
              >
                {"Shams Tabrez".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: -15, color: "#4F46E5" },
                      visible: {
                        opacity: 1,
                        y: 0,
                        color: "#6366F1",
                        transition: {
                          type: "spring",
                          bounce: 0.6,
                          duration: 0.4,
                        },
                      },
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.span>
            </h1>

            {/* Animated Role */}
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 flex flex-wrap">
              <motion.span
                className="flex"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.04,
                    },
                  },
                }}
              >
                {"Software Developer".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: -10, color: "#065F46" },
                      visible: {
                        opacity: 1,
                        y: 0,
                        color: "#aa6fd1", // Emerald green
                        transition: {
                          type: "spring",
                          bounce: 0.5,
                          duration: 0.3,
                        },
                      },
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.span>
            </h2>

            <div className="max-w-lg">
              <motion.p
                className="text-base text-gray-600 dark:text-gray-400 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                I am a passionate software developer with expertise in building
                web applications and solving complex problems. With a strong
                foundation in computer science and a keen eye for detail, I
                strive to create efficient, scalable, and user-friendly
                solutions.
              </motion.p>
              <motion.p
                className="text-base text-gray-600 dark:text-gray-400 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                Currently, I&apos;m seeking new opportunities in software
                engineering, full-stack or machine learning engineer roles. If
                you&apos;re hiring or have an exciting project, let&apos;s
                connect! Feel free to reach out via email or LinkedIn. I&apos;d
                love to chat.
              </motion.p>
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <motion.a
                href="https://github.com/Shams261"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub size={18} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/shams-tabrez-169829167/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin size={18} />
              </motion.a>
              <motion.a
                href="mailto:shamsshoaib261@gmail.com"
                className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope size={18} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-indigo-600 dark:border-indigo-400 shadow-xl">
              <Image
                src={profileImage}
                alt="Shams Tabrez"
                fill
                sizes="(max-width: 768px) 192px, 256px"
                className="object-cover"
                priority
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
