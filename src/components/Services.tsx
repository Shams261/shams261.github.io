"use client";

import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      number: "01",
      title: "AI Applications & LLM Integration",
      description:
        "I integrate LLMs into real products: chat experiences, document Q&A, semantic search, and smart matching designed with cost control, latency, and safety in mind.",
      technologies: [
        ["OpenAI APIs", "RAG", "Vector Search"],
        ["Prompting", "Streaming", "Eval/Guardrails"],
        ["Python", "PyTorch", "Embeddings"],
      ],
    },
    {
      number: "02",
      title: "Full-Stack Product Development",
      description:
        "I ship end-to-end web apps from data modeling and APIs to polished UI built for maintainability, fast iteration, and real-world usage.",
      technologies: [
        ["React", "Next.js", "TypeScript"],
        ["Node.js", "Express", "REST APIs"],
        ["MongoDB", "PostgreSQL", "Auth"],
      ],
    },
    {
      number: "03",
      title: "Performance, Deployment & Scalability",
      description:
        "I optimize and deploy systems that don’t break in production: caching, reliable routing, secure auth, and cloud setups that scale with traffic.",
      technologies: [
        ["AWS EC2", "Nginx", "PM2"],
        ["Caching", "CDN", "Rate Limits"],
        ["Monitoring", "Testing", "Security"],
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
    <section id="services" className="py-4 sm:py-6 lg:py-10 bg-white relative">
      {/* Dark container with rounded corners */}
      <div className="mx-3 sm:mx-4 lg:mx-6 xl:mx-8 bg-[#0a0a0a] rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] xl:rounded-[4rem] px-4 sm:px-6 lg:px-16 xl:px-24 py-12 sm:py-16 lg:py-28">
        {/* Header - Large Typography like the name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 sm:mb-16 lg:mb-28"
        >
          {/* Large heading with divider line */}
          <div className="flex flex-wrap items-end gap-2 sm:gap-4 lg:gap-6 mb-6 sm:mb-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-[10rem] font-bold text-white leading-[0.85] tracking-tighter">
              WHAT
            </h2>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-[10rem] font-bold text-gray-600 leading-[0.85] tracking-tighter">
              I DO
            </h2>
          </div>
          {/* Divider line */}
          <div className="w-full h-px bg-gray-800 mb-6 sm:mb-10" />
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl leading-relaxed">
            I build AI-powered products and scalable full-stack systems focused
            on real user value, clean UX, and production-ready performance.
          </p>
        </motion.div>

        {/* Services Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {services.map((service, index) => (
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
              <div className="bg-[#141414] rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] p-5 sm:p-6 lg:p-12 hover:bg-[#1a1a1a] transition-all duration-500 border border-transparent hover:border-gray-800 hover:shadow-2xl hover:shadow-black/50">
                <div className="grid lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-12 items-start">
                  {/* Number - Large and prominent */}
                  <div className="lg:col-span-2">
                    <span className="text-3xl sm:text-4xl lg:text-7xl font-bold text-gray-700 group-hover:text-gray-500 transition-colors duration-500">
                      {service.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="lg:col-span-5">
                    <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 group-hover:text-gray-100 transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base lg:text-lg group-hover:text-gray-300 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>

                  {/* Technologies - 3 rows */}
                  <div className="lg:col-span-5">
                    <div className="space-y-2 sm:space-y-3">
                      {service.technologies.map((row, rowIndex) => (
                        <div
                          key={rowIndex}
                          className="flex flex-wrap gap-1.5 sm:gap-2 lg:gap-3"
                        >
                          {row.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="text-xs sm:text-sm lg:text-base text-gray-300 bg-[#252525] px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 lg:py-2.5 rounded-full group-hover:bg-[#303030] group-hover:text-white transition-all duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      ))}
                    </div>
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
