import { motion } from 'framer-motion';
import { FiBookOpen, FiAward, FiExternalLink, FiCalendar } from 'react-icons/fi';
import portfolioData from '../data/portfolio.json';

const Courses = () => {
  const { courses } = portfolioData;

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

  const getProviderColor = (course, index, totalCourses) => {
    // Yellow color scheme
    const yellowScheme = {
      bg: 'bg-yellow-50 dark:bg-yellow-900/20',
      border: 'border-yellow-200 dark:border-yellow-800',
      text: 'text-yellow-600 dark:text-yellow-400',
      skillBg: 'bg-yellow-100 dark:bg-yellow-900/30',
    };
    
    // Array of color schemes to rotate through for courses
    const colorSchemes = [
      {
        bg: 'bg-blue-50 dark:bg-blue-900/20',
        border: 'border-blue-200 dark:border-blue-800',
        text: 'text-blue-600 dark:text-blue-400',
        skillBg: 'bg-blue-100 dark:bg-blue-900/30',
      },
      {
        bg: 'bg-orange-50 dark:bg-orange-900/20',
        border: 'border-orange-200 dark:border-orange-800',
        text: 'text-orange-600 dark:text-orange-400',
        skillBg: 'bg-orange-100 dark:bg-orange-900/30',
      },
      {
        bg: 'bg-green-50 dark:bg-green-900/20',
        border: 'border-green-200 dark:border-green-800',
        text: 'text-green-600 dark:text-green-400',
        skillBg: 'bg-green-100 dark:bg-green-900/30',
      },
      {
        bg: 'bg-purple-50 dark:bg-purple-900/20',
        border: 'border-purple-200 dark:border-purple-800',
        text: 'text-purple-600 dark:text-purple-400',
        skillBg: 'bg-purple-100 dark:bg-purple-900/30',
      }
    ];
    
    // If it's the last course, return yellow scheme
    if (index === totalCourses - 1) {
      return yellowScheme;
    }
    
    return colorSchemes[index % colorSchemes.length];
  };

  return (
    <section id="courses" className="py-20 bg-gray-50 dark:bg-gray-800">
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
              Courses & Certifications
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Continuous learning through structured courses and certifications from leading institutions and platforms.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full mt-6"></div>
          </motion.div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course, index) => {
              const colors = getProviderColor(course, index, courses.length);

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`${colors.bg} ${colors.border} border rounded-xl p-6 transition-all duration-300`}
                >
                  {/* Course Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 ${colors.skillBg} rounded-lg flex-shrink-0`}>
                        <FiBookOpen className={`w-5 h-5 ${colors.text}`} />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                          {course.title}
                        </h3>
                        <p className={`font-semibold ${colors.text}`}>
                          {course.provider}
                        </p>
                      </div>
                    </div>

                    <motion.a
                      href={course.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-2 ${colors.skillBg} rounded-lg ${colors.text} hover:scale-110 transition-transform`}
                    >
                      <FiExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>

                  {/* Completion Date */}
                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <FiCalendar className="w-4 h-4" />
                    <span>Completed: {course.completionDate}</span>
                  </div>

                  {/* Skills Learned */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <FiAward className={`w-4 h-4 ${colors.text}`} />
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Skills Learned:
                      </h4>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {course.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                          className={`px-3 py-1 ${colors.skillBg} ${colors.text} text-sm font-medium rounded-full`}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Certificate Badge */}
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 ${colors.text.replace('text-', 'bg-')} rounded-full`}></div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          Certified
                        </span>
                      </div>
                      
                      <a
                        href={course.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-sm font-medium ${colors.text} hover:underline`}
                      >
                        View Certificate
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Learning Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16"
          >
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl p-8 text-white">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-6">Learning Statistics</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold mb-2">{courses.length}</div>
                    <div className="text-indigo-100">Courses Completed</div>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold mb-2">
                      {courses.reduce((total, course) => total + course.skills.length, 0)}
                    </div>
                    <div className="text-indigo-100">Skills Learned</div>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold mb-2">
                      {new Set(courses.map(course => course.provider.split(' ')[0])).size}
                    </div>
                    <div className="text-indigo-100">Platforms Used</div>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold mb-2">100%</div>
                    <div className="text-indigo-100">Completion Rate</div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Courses;