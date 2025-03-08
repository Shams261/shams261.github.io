"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
// Import Image for the profile picture
import Image from "next/image";
// Import the profile image
import profileImage from "../profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="py-16 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        {/* Hero Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 md:order-1"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-3">
              Hi, I&apos;m{" "}
              <span className="text-indigo-600 dark:text-indigo-400">
                Shams Tabrez
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
              Software Developer || Machine Learning Engineer
            </h2>

            <div className="max-w-lg">
              <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
                I am a passionate software developer with expertise in building
                web applications and solving complex problems. With a strong
                foundation in computer science and a keen eye for detail, I
                strive to create efficient, scalable, and user-friendly
                solutions.
              </p>
              <p className="text-base text-gray-600 dark:text-gray-400 mb-6">
                Currently, I&apos;m seeking new opportunities in software
                engineering, full-stack or machine learning engineer roles. If
                you&apos;re hiring or have an exciting project, let&apos;s
                connect! Feel free to reach out via email or LinkedIn. I&apos;d
                love to chat.
              </p>
            </div>

            {/* Social Links */}
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
              {/* Using the profile image with optimizations */}
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
