"use client";

import Section from "./Section";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaTrophy,
} from "react-icons/fa";

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Lakehead University",
      location: "Thunder Bay, ON, Canada",
      period: "Sept 2023 - Aug 2024",
      gpa: "3.89/4.0",
      highlights: [
        "Specialized in AI/ML and Software Engineering",
        "Graduate Research in Natural Language Processing",
        "Dean's Honor List for Academic Excellence",
        "Relevant Coursework: Advanced Algorithms, Machine Learning, Distributed Systems",
      ],
      isRecent: true,
    },
    {
      degree: "Bachelor of Technology in Information Technology",
      school: "DIATM",
      location: "West Bengal, India",
      period: "Aug 2017 - July 2021",
      gpa: "8.2/10.0",
      highlights: [
        "Strong foundation in Computer Science fundamentals",
        "Capstone project in Machine Learning",
        "Active member of Technical Society",
        "Relevant Coursework: Data Structures, Algorithms, Database Systems, Web Development",
      ],
      isRecent: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <Section id="education" title="Education" className="bg-zinc-800">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-8"
      >
        {education.map((edu, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`relative p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl ${
              edu.isRecent
                ? "bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border-indigo-200 dark:border-indigo-700"
                : "bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600"
            }`}
          >
            {edu.isRecent && (
              <div className="absolute top-4 right-4">
                <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <FaTrophy className="text-xs" />
                  Recent Graduate
                </span>
              </div>
            )}

            <div className="grid md:grid-cols-3 gap-6 items-start">
              {/* Education Info */}
              <div className="md:col-span-2">
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className={`p-3 rounded-xl ${
                      edu.isRecent
                        ? "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
                        : "bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300"
                    }`}
                  >
                    <FaGraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                      {edu.school}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <FaMapMarkerAlt />
                        {edu.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt />
                        {edu.period}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="ml-16">
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                      >
                        <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* GPA Card */}
              <div className="flex justify-center md:justify-end">
                <div
                  className={`text-center p-6 rounded-xl border-2 ${
                    edu.isRecent
                      ? "bg-white dark:bg-gray-800 border-indigo-200 dark:border-indigo-700"
                      : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600"
                  }`}
                >
                  <div
                    className={`text-3xl font-bold mb-1 ${
                      edu.isRecent
                        ? "text-indigo-600 dark:text-indigo-400"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {edu.gpa}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    GPA
                  </div>
                  {edu.isRecent && (
                    <div className="mt-2 text-xs text-indigo-600 dark:text-indigo-400 font-semibold">
                      Dean's Honor List
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Achievement Summary */}
        <motion.div
          variants={itemVariants}
          className="text-center bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-4">Academic Excellence</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold">3.89</div>
              <div className="text-indigo-100">Master's GPA</div>
            </div>
            <div>
              <div className="text-3xl font-bold">🏆</div>
              <div className="text-indigo-100">Hackathon Winner</div>
            </div>
            <div>
              <div className="text-3xl font-bold">2+</div>
              <div className="text-indigo-100">Years Experience</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Education;
