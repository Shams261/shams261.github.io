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
    <section id="services" className="py-20 bg-black">
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
            WHAT I DO <span className="text-neutral-500">/</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-4xl mx-auto leading-relaxed">
            <span className="text-neutral-500">(SERVICES)</span> I specialize in
            building AI-powered applications and scalable architectures that are
            fast, reliable, and user-friendly. With a solid foundation in both
            machine learning and system design, I help bring innovative ideas to
            life.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="group">
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                {/* Service Number */}
                <div className="flex-shrink-0">
                  <div className="text-6xl md:text-8xl font-bold text-neutral-800 leading-none">
                    {service.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-neutral-300 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-neutral-400 text-lg leading-relaxed mb-6 max-w-3xl">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-sm text-neutral-500 border border-neutral-700 px-3 py-1 rounded-full hover:border-neutral-600 hover:text-neutral-400 transition-colors duration-200"
                      >
                        {String(techIndex + 1).padStart(2, "0")}
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Divider */}
              {index < services.length - 1 && (
                <div className="mt-12 h-px bg-neutral-800"></div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
