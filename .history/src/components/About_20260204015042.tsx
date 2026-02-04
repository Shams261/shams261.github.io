"use client";

import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaClock,
  FaTrophy,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";
import Section from "./Section";

const About = () => {
  const highlights = [
    {
      icon: <FaGraduationCap className="text-emerald-400" />,
      title: "Master's in CS",
      subtitle: "Lakehead University",
      description: "3.89 GPA • Specialized in AI/ML and Software Engineering",
    },
    {
      icon: <FaBriefcase className="text-blue-400" />,
      title: "Software Engineer",
      subtitle: "2+ Years at Accenture",
      description:
        "Enterprise SaaS • 30% performance improvements • Team leadership",
    },
    {
      icon: <FaTrophy className="text-purple-400" />,
      title: "Hackathon Winner",
      subtitle: "AI Innovation",
      description: "Built Verity - RAG pipeline over 2.97M Reddit posts",
    },
  ];

  const skills = [
    { name: "Next.js", level: 90 },
    { name: "React", level: 95 },
    { name: "TypeScript", level: 88 },
    { name: "Python", level: 85 },
    { name: "Node.js", level: 82 },
    { name: "TailwindCSS", level: 90 },
    { name: "PostgreSQL", level: 80 },
    { name: "AWS", level: 75 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <Section id="about" title="About Me" className="bg-neutral-900">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid lg:grid-cols-2 gap-12 items-start"
      >
        {/* Left Column - Story & Location */}
        <motion.div variants={itemVariants} className="space-y-6">
          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold text-white mb-4">Craft</h3>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Building scalable apps, websites, and automations. I understand
              what advantages modern tech can provide, helping me advise on the
              solutions a business actually needs.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              I'm a passionate Software Engineer with a knack for building
              full-stack web applications using modern technologies like Next.js
              and TailwindCSS. My journey in tech began with a curiosity for
              solving real-world problems through innovative solutions.
            </p>
          </div>

          {/* Location Card */}
          <div className="bg-gradient-to-r from-zinc-800/50 to-zinc-700/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50">
            <div className="flex items-start space-x-4">
              <div className="bg-emerald-500/20 p-3 rounded-full">
                <FaMapMarkerAlt className="text-emerald-400" size={20} />
              </div>
              <div className="flex-1">
                <h4 className="text-white font-semibold mb-1">
                  Thunder Bay, Canada
                </h4>
                <p className="text-emerald-400 text-sm mb-2">
                  48.3809° N, 89.2477° W • GMT-5
                </p>
                <div className="flex items-center space-x-2 text-zinc-400 text-sm">
                  <FaClock size={14} />
                  <span>Open to opportunities worldwide</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Highlights & Skills */}
        <motion.div variants={itemVariants} className="space-y-8">
          {/* Highlights */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Highlights</h3>
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-zinc-800/50 backdrop-blur-sm rounded-xl p-4 border border-zinc-700/50 hover:border-emerald-500/30 transition-colors"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-zinc-700/50 rounded-lg">
                      {highlight.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold">
                        {highlight.title}
                      </h4>
                      <p className="text-emerald-400 text-sm font-medium">
                        {highlight.subtitle}
                      </p>
                      <p className="text-zinc-400 text-sm mt-1">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills Preview */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Core Technologies
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {skills.slice(0, 8).map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-zinc-800/50 backdrop-blur-sm rounded-lg p-3 border border-zinc-700/50 hover:border-emerald-500/30 transition-all duration-300 group"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-zinc-300 font-medium text-sm">
                      {skill.name}
                    </span>
                    <span className="text-emerald-400 text-xs">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-zinc-700 rounded-full h-1.5">
                    <motion.div
                      className="bg-gradient-to-r from-emerald-400 to-blue-400 h-1.5 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        variants={itemVariants}
        className="mt-16 text-center bg-gradient-to-r from-zinc-800/50 to-zinc-700/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-700/50"
      >
        <p className="text-zinc-300 text-lg mb-4">
          <span className="font-semibold text-white">
            Available for new opportunities:
          </span>{" "}
          Let's build something amazing together.
        </p>
        <motion.a
          href="#connect"
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Get In Touch</span>
        </motion.a>
      </motion.div>
    </Section>
  );
};

export default About;
