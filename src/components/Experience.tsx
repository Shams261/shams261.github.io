"use client";

import Section from "./Section";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Accenture",
      location: "Kolkata, India",
      period: "Dec 2022 - Aug 2023",
      description: [
        "Managed comprehensive development phases from requirement gathering to deployment; enhanced solution design and testing protocols, resulting in a 40% reduction in post-deployment issues and a 20% increase in client satisfaction.",
        "Revamped software settings, boosting performance by 30% and improving user experience metrics, resulting in a 20% decrease in customer support tickets.",
        "Introduced real-time notifications, reducing user complaints by 30% and boosting user retention rates by 15%, enhancing overall user satisfaction.",
        "Engineered comprehensive user stories and optimized analytical data structures, enhancing data retrieval efficiency by 40% and improving user experience, leading to a 25% increase in user engagement.",
      ],
    },
    {
      title: "Junior Software Engineer",
      company: "Accenture",
      location: "Bengaluru, India",
      period: "Sept 2021 - Nov 2022",
      description: [
        "Collaborated with 5+ stakeholders from marketing, sales, and development to gather and analyze requirements, leading to a streamlined process that improved project delivery time by 20%.",
        "Tested functionality, performed debugging and carried out modifications to conduct quality checks.",
        "Leveraged Agile principles and conducted sprint reviews; decreased bug resolution time by 50% and enhanced team collaboration and productivity by 35%.",
        "Guided the technical support to user, troubleshooting the issues and creating the training materials.",
      ],
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Section
      id="experience"
      title="Work Experience"
      className="bg-gray-50 dark:bg-gray-800"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative"
      >
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-indigo-200 dark:bg-indigo-900"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`relative flex flex-col md:flex-row md:items-center mb-12 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 rounded-full bg-indigo-600 dark:bg-indigo-400 border-4 border-white dark:border-gray-800 z-10"></div>

            {/* Content */}
            <div
              className={`ml-8 md:ml-0 md:w-5/12 ${
                index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
              }`}
            >
              <motion.div
                className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:z-10"
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  zIndex: 10,
                }}
              >
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {exp.title}
                </h3>
                <div className="flex items-center mb-2">
                  <FaBriefcase className="text-indigo-600 dark:text-indigo-400 mr-2" />
                  <span className="text-gray-600 dark:text-gray-300">
                    {exp.company}
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <FaMapMarkerAlt className="text-indigo-600 dark:text-indigo-400 mr-2" />
                  <span className="text-gray-600 dark:text-gray-300">
                    {exp.location}
                  </span>
                </div>
                <div className="flex items-center mb-4">
                  <FaCalendarAlt className="text-indigo-600 dark:text-indigo-400 mr-2" />
                  <span className="text-gray-600 dark:text-gray-300">
                    {exp.period}
                  </span>
                </div>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Experience;
