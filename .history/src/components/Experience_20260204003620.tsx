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
        Re-architected configuration system for enterprise SaaS platform, implementing server-side in-memory caching and
streamlined REST APIs, delivering 30% performance gain, <200ms response time, and 20% fewer support tickets
• Led full-stack development for enterprise client application, implementing automated testing (Jest) and CI/CD pipelines
that reduced post-deployment defects by 40% and increased client satisfaction by 20%
• Optimized frontend JavaScript components and implemented lazy loading patterns, reducing initial page load time by
25% and improving application responsiveness across 12+ customer-facing modules
• Designed and optimized backend APIs and SQL queries powering analytics workflows, improving data retrieval
performance by 40% and enabling real-time reporting for client-facing features
      ],
    },
    {
      title: "Junior Software Engineer",
      company: "Accenture",
      location: "Bengaluru, India",
      period: "Sept 2021 - Nov 2022",
      description: [
        "Resolved 150+ production defects by implementing systematic debugging workflows and code modifications across multiple client-facing modules, reducing critical issue backlog by 50% and improving application uptime from 97% to 99.2%.",
        "Engineered frontend UI enhancements using JavaScript, implementing responsive design patterns and form validation logic across 20+ application screens, which decreased user-reported errors by 25% and improved user satisfaction scores.",
        "Delivered 30+ feature customizations and configuration changes in bi-weekly Agile sprints by collaborating with cross-functional teams of 8+ members, achieving 95% on-time sprint completion rate and maintaining zero production rollbacks.",
        "Established comprehensive testing protocols using Git for version control and Postman for API validation, creating 25+ technical documentation artifacts that reduced new developer onboarding time from 3 weeks to 2 weeks (35%improvement).",
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
