"use client";

import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "JavaScript", "TypeScript", "SQL", "HTML5", "CSS3"],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "FastAPI",
        "Tailwind CSS",
      ],
    },
    {
      title: "Backend, APIs & Auth",
      skills: [
        "REST APIs",
        "WebSockets",
        "OAuth",
        "JWT",
        "Microservices",
        "Postman",
      ],
    },
    {
      title: "Databases, Cloud & AI",
      skills: [
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "AWS",
        "Nginx",
        "CI/CD",
        "Docker",
        "ChromaDB",
        "RAG / Embeddings",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-white relative">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
        {/* Header - Large Typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="flex flex-wrap items-end gap-2 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-[10rem] font-bold text-black leading-[0.85] tracking-tighter">
              TECH
            </h2>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-[10rem] font-bold text-gray-400 leading-[0.85] tracking-tighter">
              STACK
            </h2>
          </div>
          <div className="w-full h-px bg-gray-200 mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-500 max-w-3xl leading-relaxed">
            Technologies and tools I use to build modern, scalable applications.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8 sm:space-y-12 lg:space-y-16"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={categoryIndex} variants={itemVariants}>
              <motion.h3
                className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-4 sm:mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                {category.title}
              </motion.h3>

              <motion.div
                className="flex flex-wrap gap-3 sm:gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    variants={skillVariants}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "#000",
                      color: "#fff",
                      transition: { duration: 0.2 },
                    }}
                    className="inline-block text-sm sm:text-base lg:text-lg font-medium text-gray-800 bg-gray-100 hover:bg-black hover:text-white px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-full border border-gray-200 hover:border-gray-800 transition-all duration-200 cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
