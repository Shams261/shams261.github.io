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
              Software Engineer & Full Stack Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-zinc-500 mb-8 max-w-2xl mx-auto"
            >
              Passionate about building thoughtful digital experiences that leave a mark.
              Currently available for new opportunities worldwide.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex justify-center space-x-4 mb-16"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="bg-zinc-800/60 hover:bg-emerald-500/20 border border-zinc-700/50 hover:border-emerald-500/30 text-zinc-400 hover:text-emerald-400 p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-zinc-500 text-sm font-medium">Scroll to explore</span>
            <FaArrowDown className="text-emerald-400 text-lg" />
          </div>
        </motion.div>
      </section>
    </ClientOnly>
  );
};

export default Hero;
                      staggerChildren: 0.06,
                    },
                  },
                }}
              >
                {"Shams Tabrez".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: -15 },
                      visible: {
                        opacity: 1,
                        y: 0,
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

            {/* Role & Location */}
            <div className="mb-6 space-y-2">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-zinc-200">
                Full-Stack Software Engineer
              </h2>
              <div className="flex items-center gap-4 text-zinc-400">
                <span className="flex items-center gap-1">
                  📍 Toronto, ON, Canada
                </span>
                <span className="flex items-center gap-1">
                  🎓 MS Computer Science - Lakehead University
                </span>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="mb-8">
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
