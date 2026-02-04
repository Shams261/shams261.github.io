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
        "Re-architected configuration system for enterprise SaaS platform, implementing server-side in-memory caching and streamlined REST APIs, delivering 30% performance gain, <200ms response time, and 20% fewer support tickets",
        "Led full-stack development for enterprise client application, implementing automated testing (Jest) and CI/CD pipelinesthat reduced post-deployment defects by 40% and increased client satisfaction by 20%",
        "Optimized frontend JavaScript components and implemented lazy loading patterns, reducing initial page load time by 25% and improving application responsiveness across 12+ customer-facing modules",
        "Designed and optimized backend APIs and SQL queries powering analytics workflows, improving data retrieval performance by 40% and enabling real-time reporting for client-facing features",
      ],
    },
    {
      title: "Junior Software Engineer",
      company: "Accenture",
      location: "Bengaluru, India",
      period: "Sept 2021 - Nov 2022",
      description: [
        "Resolved 150+ production defects by implementing systematic debugging workflows to fix root causes, reducing critical issue backlog by 50% and improving application uptime from 97% to 99.2%",
        "Engineered frontend UI enhancements using JavaScript, implementing responsive design patterns and form validation logic across 20+ application screens, which decreased user-reported errors by 25% and improved user satisfaction scores",
        "Established testing protocols and created 25+ technical documentation artifacts using Git and Postman, reducing new developer onboarding time from 3 weeks to 2 weeks (35% improvement)",
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
    <section id="experience" className="py-20 bg-neutral-900">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            WORK EXPERIENCE <span className="text-neutral-500">/</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-3xl mx-auto">
            <span className="text-neutral-500">(PROFESSIONAL JOURNEY)</span> 2+ years of hands-on experience 
            building enterprise-scale applications and leading development teams at Accenture.
          </p>
        </motion.div>

        {/* Experience Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                {/* Period */}
                <div className="flex-shrink-0 md:w-48">
                  <div className="text-sm text-neutral-500 font-mono tracking-wider">
                    {exp.period}
                  </div>
                  <div className="text-neutral-600 text-sm mt-1">
                    {exp.location}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-neutral-300 transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <div className="text-xl text-neutral-400 font-medium">
                      {exp.company}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {exp.description.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-1 h-1 bg-neutral-600 rounded-full mt-3"></div>
                        <p className="text-neutral-400 leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Divider */}
              {index < experiences.length - 1 && (
                <div className="mt-12 h-px bg-neutral-800"></div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-neutral-800/50 border border-neutral-700 rounded-full px-8 py-4">
            <span className="text-neutral-400 text-sm">Currently seeking new opportunities in</span>
            <span className="text-white font-semibold">AI/ML Engineering</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
