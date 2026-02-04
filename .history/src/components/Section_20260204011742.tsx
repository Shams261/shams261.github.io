"use client";

import { ReactNode, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

const Section = ({ id, title, children, className = "" }: SectionProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id={id} className={`py-14 ${className}`} ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={variants}
          initial="hidden"
          animate={isMounted && inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.h2
            variants={variants}
            className="text-2xl md:text-3xl font-bold text-center mb-8 text-white"
          >
            <span className="inline-block border-b-3 border-emerald-500 pb-1">
              {title}
            </span>
          </motion.h2>

          <motion.div variants={variants}>{children}</motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section;
