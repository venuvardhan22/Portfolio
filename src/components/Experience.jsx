import { motion } from 'framer-motion';
import { FiBriefcase, FiMapPin, FiCalendar } from 'react-icons/fi';
import portfolioData from '../data/portfolio.json';

const Experience = () => {
  const { experience } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Experience
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              My journey through various roles and the experiences that shaped my professional growth.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full mt-6"></div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 to-secondary-600 transform md:-translate-x-0.5"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full transform -translate-x-2 md:-translate-x-2 border-4 border-white dark:border-gray-800"></div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                      index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                  >
                    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-start justify-between flex-wrap gap-2">
                          <div className="flex items-center space-x-2 text-primary-600 dark:text-primary-400">
                            <FiBriefcase className="w-5 h-5 flex-shrink-0" />
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                              {exp.title}
                            </h3>
                          </div>
                          
                          <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-medium">
                            {exp.duration}
                          </span>
                        </div>

                        <div className="mt-2 space-y-1">
                          <p className="text-lg font-semibold text-secondary-600 dark:text-secondary-400">
                            {exp.company}
                          </p>
                          
                          <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                            <div className="flex items-center space-x-1">
                              <FiMapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <FiCalendar className="w-4 h-4" />
                              <span>{exp.duration}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          Key Responsibilities:
                        </h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((responsibility, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 + idx * 0.1 }}
                              className="flex items-start space-x-2"
                            >
                              <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700 dark:text-gray-300">
                                {responsibility}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
    
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;