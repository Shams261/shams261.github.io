"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mark as client-side immediately
    setIsClient(true);

    // Preload critical components
    const preloadComponents = async () => {
      // Simulate preloading (you could add actual preloading logic here)
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 800); // Reduced loading time for better UX

      return () => clearTimeout(timer);
    };

    preloadComponents();
  }, []);

  // Loading animation variants
  const loadingContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Faster staggering
      },
    },
  };

  const loadingDotVariants = {
    hidden: { y: 0, opacity: 0 },
    visible: {
      y: [0, -15, 0],
      opacity: 1,
      transition: {
        y: {
          repeat: Infinity,
          duration: 0.5, // Faster animation
          ease: "easeInOut",
        },
      },
    },
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      {isClient && !isLoading ? (
        <>
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <Footer />
        </>
      ) : (
        <div className="min-h-screen flex flex-col items-center justify-center">
          <motion.div
            className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            Loading Portfolio
          </motion.div>

          <motion.div
            className="flex space-x-2"
            variants={loadingContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {[1, 2, 3].map((dot) => (
              <motion.div
                key={dot}
                className="w-3 h-3 rounded-full bg-indigo-600 dark:bg-indigo-400"
                variants={loadingDotVariants}
                style={{
                  animationDelay: `${dot * 0.05}s`,
                }}
              />
            ))}
          </motion.div>
        </div>
      )}
    </main>
  );
}
