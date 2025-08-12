import { motion } from 'framer-motion';
import { FiUser, FiMapPin } from 'react-icons/fi';
import { FaGraduationCap as FiGraduationCap } from 'react-icons/fa6';
import portfolioData from '../data/portfolio.json';

const About = () => {
  const { personal, education } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
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
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="w-full space-y-8">
            {/* Personal Info and Education */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 text-primary-600 dark:text-primary-400">
                  <FiUser className="w-6 h-6" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Personal Information
                  </h3>
                </div>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {personal.bio}
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 mb-2">
                      <FiMapPin className="w-4 h-4" />
                      <span className="font-medium">Location</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{personal.location}</p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 mb-2">
                      <FiUser className="w-4 h-4" />
                      <span className="font-medium">Qualification</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{personal.title}</p>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 text-primary-600 dark:text-primary-400">
                  <FiGraduationCap className="w-6 h-6" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Education
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-primary-600 dark:border-primary-400"
                    >
                      <h4 className="font-semibold text-gray-900 dark:text-white text-lg">
                        {edu.degree}
                      </h4>
                      <p className="text-primary-600 dark:text-primary-400 font-medium">
                        {edu.school}
                      </p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-gray-600 dark:text-gray-400">
                          Class of {edu.year}
                        </span>
                        <span className="text-accent-600 dark:text-accent-400 font-medium">
                          {edu.degree === "Board of Intermediate Education" ? `Percentage: ${edu.gpa}` : `GPA: ${edu.gpa}`}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;