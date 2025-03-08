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
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const Skills = () => {
  // All skills in a single array
  const skills = [
    // Programming Languages
    { name: "Python", icon: <FaPython size={40} className="text-[#3776AB]" /> },
    { name: "JavaScript", icon: <FaJs size={40} className="text-[#F7DF1E]" /> },

    // Web Technologies
    { name: "HTML", icon: <FaHtml5 size={40} className="text-[#E34F26]" /> },
    { name: "CSS", icon: <FaCss3Alt size={40} className="text-[#1572B6]" /> },
    {
      name: "Tailwind",
      icon: <SiTailwindcss size={40} className="text-[#06B6D4]" />,
    },
    { name: "React", icon: <FaReact size={40} className="text-[#61DAFB]" /> },
    {
      name: "Node.js",
      icon: <FaNodeJs size={40} className="text-[#339933]" />,
    },
    {
      name: "RESTful APIs",
      icon: <TbApi size={40} className="text-gray-600 dark:text-gray-300" />,
    },

    // Version Control
    { name: "Git", icon: <FaGitAlt size={40} className="text-[#F05032]" /> },
    {
      name: "GitHub",
      icon: <FaGithub size={40} className="text-gray-800 dark:text-white" />,
    },

    // Databases
    { name: "MySQL", icon: <SiMysql size={40} className="text-[#4479A1]" /> },
    {
      name: "MongoDB",
      icon: <SiMongodb size={40} className="text-[#47A248]" />,
    },

    // Cloud & DevOps
    {
      name: "AWS (Basic)",
      icon: <FaAws size={40} className="text-[#FF9900]" />,
    },
    {
      name: "Docker (Basic)",
      icon: <FaDocker size={40} className="text-[#2496ED]" />,
    },
    {
      name: "Jenkins",
      icon: <SiJenkins size={40} className="text-[#D24939]" />,
    },

    // AI & Machine Learning
    {
      name: "NLP (NLTK)",
      icon: <FaBrain size={40} className="text-[#3492FF]" />,
    },
    {
      name: "Deep Learning",
      icon: <SiTensorflow size={40} className="text-[#FF6F00]" />,
    },
    {
      name: "Model Evaluation",
      icon: <FaChartBar size={40} className="text-[#F7931E]" />,
    },

    // Tools & Methodologies
    { name: "Jira", icon: <FaJira size={40} className="text-[#0052CC]" /> },
    {
      name: "Agile",
      icon: <FaTasks size={40} className="text-gray-600 dark:text-gray-300" />,
    },
    {
      name: "Scrum",
      icon: (
        <FaDatabase size={40} className="text-gray-600 dark:text-gray-300" />
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Section id="skills" title="My Skills">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex flex-col items-center"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-2 w-16 h-16 flex items-center justify-center">
              {skill.icon}
            </div>
            <span className="text-sm text-gray-700 dark:text-gray-300 text-center">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Skills;
