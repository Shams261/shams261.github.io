"use client";

import { motion } from "framer-motion";
import { FaBrain, FaRocket, FaCogs } from "react-icons/fa";
import Section from "./Section";

const Services = () => {
  const services = [
    {
      number: "01",
      title: "AI Applications & ML Integration",
      description:
        "From intelligent recommendation systems to natural language processing, I build AI-powered applications that solve real-world problems. I work with modern ML frameworks to deliver apps that learn, adapt, and provide meaningful insights.",
      technologies: ["Python", "TensorFlow", "OpenAI APIs", "LangChain"],
      icon: <FaBrain className="text-emerald-400" size={24} />,
      gradient: "from-emerald-500/10 to-blue-500/10",
      border: "border-emerald-500/20",
    },
    {
      number: "02",
      title: "System Architecture & Design",
      description:
        "Design is more than structure — it's about efficiency and reliability. I architect scalable backend systems and microservices that handle growth gracefully. My focus is on performance, maintainability, and fault tolerance.",
      technologies: ["Node.js", "PostgreSQL", "Redis", "Docker"],
      icon: <FaCogs className="text-blue-400" size={24} />,
      gradient: "from-blue-500/10 to-purple-500/10",
      border: "border-blue-500/20",
    },
    {
      number: "03",
      title: "Performance & Scalability",
      description:
        "Beyond handling data, I'm driven by the challenge of optimization. I design systems that scale efficiently, implement caching strategies, and apply core CS principles to build for speed, reliability, and massive user bases.",
      technologies: ["AWS", "Optimization", "Caching", "Load Balancing"],
      icon: <FaRocket className="text-purple-400" size={24} />,
      gradient: "from-purple-500/10 to-pink-500/10",
      border: "border-purple-500/20",
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
    <Section id="services" title="What I Do" className="bg-zinc-950">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-4 mb-16"
      >
        <motion.p 
          variants={itemVariants}
          className="text-zinc-400 text-center text-lg max-w-3xl mx-auto"
        >
          I specialize in building intelligent, scalable applications that push the boundaries of what's possible. 
          With a solid foundation in AI/ML and system design, I help bring innovative ideas to life.
        </motion.p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-8"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`bg-gradient-to-r ${service.gradient} backdrop-blur-sm rounded-2xl p-8 border ${service.border} hover:border-opacity-40 transition-all duration-300 group`}
          >
            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
              {/* Number & Icon */}
              <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-2">
                <div className="flex-shrink-0 w-12 h-12 bg-zinc-800/50 rounded-full flex items-center justify-center border border-zinc-700/50">
                  {service.icon}
                </div>
                <span className="text-3xl font-bold text-zinc-600 lg:text-zinc-700">
                  {service.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-zinc-300 leading-relaxed text-lg">
                  {service.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {service.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-zinc-800/50 border border-zinc-700/50 rounded-full text-sm text-zinc-300 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Services;