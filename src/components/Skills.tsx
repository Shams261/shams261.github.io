"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Globe,
  Cpu,
  GitBranch,
  Github,
  Container,
  Cloud,
  Briefcase,
  Shield,
  Brain,
  Server,
  Zap,
  Network,
  FileCode,
  Layout,
  Terminal,
  Package,
  Settings,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      number: "01",
      title: "Languages",
      description:
        "Core programming languages I use to build and ship products",
      skills: [
        { name: "Python", icon: <Code2 size={24} /> },
        { name: "JavaScript", icon: <FileCode size={24} /> },
        { name: "TypeScript", icon: <FileCode size={24} /> },
        { name: "SQL", icon: <Database size={24} /> },
        { name: "HTML5", icon: <Layout size={24} /> },
        { name: "CSS3", icon: <Layout size={24} /> },
      ],
    },
    {
      number: "02",
      title: "Frameworks & APIs",
      description:
        "Frameworks and API patterns for building production systems",
      skills: [
        { name: "React.js", icon: <Cpu size={24} /> },
        { name: "Next.js", icon: <Globe size={24} /> },
        { name: "Node.js", icon: <Server size={24} /> },
        { name: "Express.js", icon: <Server size={24} /> },
        { name: "Tailwind CSS", icon: <Layout size={24} /> },
        { name: "FastAPI", icon: <Zap size={24} /> },
        { name: "REST APIs", icon: <Network size={24} /> },
        { name: "WebSockets", icon: <Network size={24} /> },
        { name: "OAuth", icon: <Shield size={24} /> },
        { name: "JWT", icon: <Shield size={24} /> },
        { name: "Microservices", icon: <Network size={24} /> },
      ],
    },
    {
      number: "03",
      title: "Databases & DevOps",
      description: "Datastores and infrastructure for reliability and scale",
      skills: [
        { name: "MongoDB", icon: <Database size={24} /> },
        { name: "PostgreSQL", icon: <Database size={24} /> },
        { name: "MySQL", icon: <Database size={24} /> },
        { name: "ChromaDB", icon: <Database size={24} /> },
        { name: "AWS (EC2, S3)", icon: <Cloud size={24} /> },
        { name: "Docker", icon: <Container size={24} /> },
        { name: "Nginx", icon: <Server size={24} /> },
        { name: "CI/CD", icon: <Settings size={24} /> },
      ],
    },
    {
      number: "04",
      title: "AI/ML & Tools",
      description: "LLM development plus the tools that keep projects moving",
      skills: [
        { name: "LLMs", icon: <Brain size={24} /> },
        { name: "RAG", icon: <Brain size={24} /> },
        { name: "LangChain", icon: <Package size={24} /> },
        { name: "Embeddings", icon: <Brain size={24} /> },
        { name: "Vector Search", icon: <Zap size={24} /> },
        { name: "Git", icon: <GitBranch size={24} /> },
        { name: "GitHub", icon: <Github size={24} /> },
        { name: "Postman", icon: <Terminal size={24} /> },
        { name: "Agile/Scrum", icon: <Briefcase size={24} /> },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="skills" className="py-16 lg:py-20 bg-white relative">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-16 xl:px-24">
        {/* Header - Large Typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 lg:mb-28"
        >
          <div className="flex items-end gap-4 lg:gap-6 mb-10">
            <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold text-black leading-[0.85] tracking-tighter">
              TECH
            </h2>
            <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold text-gray-400 leading-[0.85] tracking-tighter">
              STACK
            </h2>
          </div>
          <div className="w-full h-px bg-gray-200 mb-10" />
          <p className="text-xl md:text-2xl text-gray-500 max-w-3xl leading-relaxed">
            A curated toolkit I use to ship intelligent, production-ready
            applications clean UX, reliable APIs, and scalable AI systems.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                y: -8,
                transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
              }}
              className="group cursor-pointer"
            >
              <div className="bg-[#f5f5f5] rounded-[2rem] lg:rounded-[2.5rem] p-8 lg:p-10 hover:bg-white transition-all duration-500 border border-transparent hover:border-gray-200 hover:shadow-2xl hover:shadow-gray-200/50 h-full">
                <div className="flex items-start gap-6 mb-8">
                  <span className="text-4xl lg:text-5xl font-bold text-gray-300 group-hover:text-gray-400 transition-colors duration-500">
                    {category.number}
                  </span>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-black mb-2 group-hover:text-gray-800 transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-gray-500 text-base group-hover:text-gray-600 transition-colors duration-300">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      whileHover={{ y: -4, scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col items-center p-4 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300"
                    >
                      <div className="mb-3 text-gray-600 group-hover:text-black transition-colors duration-300">
                        {skill.icon}
                      </div>
                      <span className="text-xs lg:text-sm font-medium text-gray-600 text-center group-hover:text-gray-800 transition-colors duration-300">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
