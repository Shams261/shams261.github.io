"use client";

import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      number: "01",
      title: "Software Engineer",
      company: "Accenture",
      location: "WB, India",
      period: "Dec 2022 - Aug 2023",
      description: [
        "Re-architected configuration system for enterprise SaaS platform, implementing server-side in-memory caching and streamlined REST APIs, delivering 30% performance gain and <200ms response time",
        "Led full-stack development for enterprise client application, implementing automated testing (Jest) and CI/CD pipelines that reduced post-deployment defects by 40%",
        "Optimized frontend JavaScript components and implemented lazy loading patterns, reducing initial page load time by 25%",
        "Designed and optimized backend APIs and SQL queries, improving data retrieval performance by 40%",
      ],
    },
    {
      number: "02",
      title: "Junior Software Engineer",
      company: "Accenture",
      location: "Bangalore, India",
      period: "Sept 2021 - Nov 2022",
      description: [
        "Resolved 150+ production defects by implementing systematic debugging workflows, reducing critical issue backlog by 50% and improving uptime to 99.2%",
        "Engineered frontend UI enhancements using JavaScript, implementing responsive design patterns across 20+ application screens",
        "Established testing protocols and created 25+ technical documentation artifacts, reducing new developer onboarding time by 35%",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="experience" className="py-16 lg:py-20 bg-white relative">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-16 xl:px-24">
        {/* Header - Large Typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 lg:mb-28"
        >
          {/* Large heading */}
          <div className="flex items-end gap-4 lg:gap-6 mb-10">
            <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold text-black leading-[0.85] tracking-tighter">
              WORK
            </h2>
            <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold text-gray-400 leading-[0.85] tracking-tighter">
              HISTORY
            </h2>
          </div>
          {/* Divider line */}
          <div className="w-full h-px bg-gray-200 mb-10" />
          <p className="text-xl md:text-2xl text-gray-500 max-w-3xl leading-relaxed">
            3+ years building and shipping software across enterprise and
            personal products, with a focus on scalable systems, reliability,
            and performance.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                y: -8,
                transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
              }}
              className="group cursor-pointer"
            >
              <div className="bg-[#f5f5f5] rounded-[2rem] lg:rounded-[2.5rem] p-8 lg:p-12 hover:bg-white transition-all duration-500 border border-transparent hover:border-gray-200 hover:shadow-2xl hover:shadow-gray-200/50">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Number - Large and prominent */}
                  <div className="lg:col-span-2">
                    <span className="text-5xl lg:text-7xl font-bold text-gray-300 group-hover:text-gray-400 transition-colors duration-500">
                      {exp.number}
                    </span>
                  </div>

                  {/* Title, Company & Period */}
                  <div className="lg:col-span-4">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-3 group-hover:text-gray-800 transition-colors duration-300 leading-tight">
                      {exp.title}
                    </h3>
                    <p className="text-xl lg:text-2xl text-gray-500 mb-4">
                      @ {exp.company}
                    </p>
                    <div className="flex items-center gap-3">
                      <span className="text-sm lg:text-base text-gray-600 bg-white px-4 lg:px-5 py-2 lg:py-2.5 rounded-full border border-gray-200 group-hover:bg-gray-50 group-hover:border-gray-300 transition-all duration-300 whitespace-nowrap">
                        {exp.period}
                      </span>
                      <span className="text-sm lg:text-base text-gray-600 bg-white px-4 lg:px-5 py-2 lg:py-2.5 rounded-full border border-gray-200 group-hover:bg-gray-50 group-hover:border-gray-300 transition-all duration-300 whitespace-nowrap">
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-6">
                    <ul className="space-y-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <span className="w-2 h-2 bg-gray-400 rounded-full mt-2.5 flex-shrink-0 group-hover:bg-black transition-colors duration-300" />
                          <span className="text-gray-700 leading-relaxed text-base lg:text-lg group-hover:text-gray-900 transition-colors duration-300">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
