"use client";

import { motion } from "framer-motion";
import { FaBrain, FaRocket, FaCogs, FaArrowRight } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      number: "01",
      title: "AI Applications & ML Integration",
      description:
        "From intelligent recommendation systems to natural language processing, I build AI-powered applications that solve real-world problems. I work with modern ML frameworks to deliver apps that learn, adapt, and provide meaningful insights.",
      technologies: ["Python", "TensorFlow", "OpenAI APIs", "LangChain"],
      icon: <FaBrain size={24} />,
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      number: "02",
      title: "System Architecture & Design",
      description:
        "Design is more than structure — it's about efficiency and reliability. I architect scalable backend systems and microservices that handle growth gracefully. My focus is on performance, maintainability, and fault tolerance.",
      technologies: ["Node.js", "PostgreSQL", "Redis", "Docker"],
      icon: <FaCogs size={24} />,
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      number: "03",
      title: "Performance & Scalability",
      description:
        "Beyond handling data, I'm driven by the challenge of optimization. I design systems that scale efficiently, implement caching strategies, and apply core CS principles to build for speed, reliability, and massive user bases.",
      technologies: ["AWS", "Optimization", "Caching", "Load Balancing"],
      icon: <FaRocket size={24} />,
      gradient: "from-purple-500 to-pink-500",
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
    <section
      id="services"
      className="py-24 lg:py-32 bg-gray-50 relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-20"
        >
          {/* <span className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-4 block">
            Services
          </span> */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
            What I Do
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            I specialize in building AI-powered applications and scalable
            architectures that are fast, reliable, and user-friendly.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 card-hover cursor-pointer"
            >
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                {/* Left side - Number & Icon */}
                <div className="flex-shrink-0 flex items-start gap-6">
                  <span className="text-7xl lg:text-8xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors duration-500">
                    {service.number}
                  </span>
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}
                  >
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 group-hover:text-gray-700 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-6">
                    {service.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-sm text-gray-600 bg-gray-100 px-4 py-2 rounded-full group-hover:bg-gray-200 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <div className="flex items-center gap-2 text-black font-medium opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500">
                    <span>Learn More</span>
                    <FaArrowRight size={12} />
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

export default Services;
