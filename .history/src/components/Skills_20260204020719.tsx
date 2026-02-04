"use client";

import Section from "./Section";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaAws,
  FaJira,
  FaDatabase,
  FaBrain,
  FaChartBar,
  FaTasks,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiJenkins,
  SiTensorflow,
  SiOpenai,
  SiHuggingface,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const Skills = () => {
  // Skills organized by categories from resume
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        {
          name: "Python",
          icon: <FaPython size={40} className="text-[#3776AB]" />,
        },
        {
          name: "JavaScript",
          icon: <FaJs size={40} className="text-[#F7DF1E]" />,
        },
        {
          name: "TypeScript",
          icon: <FaJs size={40} className="text-[#3178C6]" />,
        },
        {
          name: "SQL",
          icon: <FaDatabase size={40} className="text-[#336791]" />,
        },
        {
          name: "HTML5",
          icon: <FaHtml5 size={40} className="text-[#E34F26]" />,
        },
        {
          name: "CSS3",
          icon: <FaCss3Alt size={40} className="text-[#1572B6]" />,
        },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        {
          name: "React.js",
          icon: <FaReact size={40} className="text-[#61DAFB]" />,
        },
        {
          name: "Next.js",
          icon: (
            <FaReact size={40} className="text-[#000000] dark:text-white" />
          ),
        },
        {
          name: "Node.js",
          icon: <FaNodeJs size={40} className="text-[#339933]" />,
        },
        {
          name: "Express.js",
          icon: (
            <FaNodeJs size={40} className="text-[#000000] dark:text-white" />
          ),
        },
        {
          name: "REST APIs",
          icon: (
            <TbApi size={40} className="text-gray-600 dark:text-gray-300" />
          ),
        },
        {
          name: "WebSockets",
          icon: <TbApi size={40} className="text-[#FF6B6B]" />,
        },
      ],
    },
    {
      title: "Databases & Cloud",
      skills: [
        {
          name: "MongoDB",
          icon: <SiMongodb size={40} className="text-[#47A248]" />,
        },
        {
          name: "MySQL",
          icon: <SiMysql size={40} className="text-[#4479A1]" />,
        },
        {
          name: "AWS EC2",
          icon: <FaAws size={40} className="text-[#FF9900]" />,
        },
        {
          name: "Docker",
          icon: <FaDocker size={40} className="text-[#2496ED]" />,
        },
        {
          name: "GitHub Actions",
          icon: (
            <FaGithub size={40} className="text-gray-800 dark:text-white" />
          ),
        },
        {
          name: "Jenkins",
          icon: <SiJenkins size={40} className="text-[#D24939]" />,
        },
      ],
    },
    {
      title: "AI/ML & Tools",
      skills: [
        {
          name: "LLMs",
          icon: <FaBrain size={40} className="text-[#3492FF]" />,
        },
        {
          name: "RAG",
          icon: <SiHuggingface size={40} className="text-[#ffd21e]" />,
        },
        {
          name: "Git",
          icon: <FaGitAlt size={40} className="text-[#F05032]" />,
        },
        {
          name: "GitHub",
          icon: (
            <FaGithub size={40} className="text-gray-800 dark:text-white" />
          ),
        },
        {
          name: "Postman",
          icon: <TbApi size={40} className="text-[#FF6C37]" />,
        },
        { name: "Jira", icon: <FaJira size={40} className="text-[#0052CC]" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-black">
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
            TECHNICAL SKILLS <span className="text-neutral-500">/</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-3xl mx-auto">
            <span className="text-neutral-500">(TECHNOLOGIES)</span> A
            comprehensive toolkit of modern technologies and frameworks for
            building scalable, high-performance applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-8 group-hover:text-neutral-300 transition-colors duration-300">
              {category.title}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                  className="group/skill cursor-pointer"
                >
                  <div className="bg-neutral-900/50 backdrop-blur-sm rounded-xl border border-neutral-800/50 p-6 text-center hover:border-neutral-700/50 hover:bg-neutral-800/30 transition-all duration-300">
                    <div className="flex justify-center mb-3 opacity-80 group-hover/skill:opacity-100 transition-opacity duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-neutral-400 group-hover/skill:text-neutral-300 transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Tech Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-neutral-900/50 border border-neutral-800 rounded-full px-8 py-4">
            <span className="text-neutral-400 text-sm">Specialized in</span>
            <span className="text-white font-semibold">
              Full-Stack Development
            </span>
            <span className="text-neutral-600">•</span>
            <span className="text-white font-semibold">AI/ML Integration</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
