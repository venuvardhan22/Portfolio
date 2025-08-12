import { motion } from 'framer-motion';
import { FiAward, FiStar, FiCalendar } from 'react-icons/fi';
import { FaTrophy as FiTrophy } from 'react-icons/fa6';
import portfolioData from '../data/portfolio.json';

const Achievements = () => {
  const { achievements } = portfolioData;

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

  const getIcon = (index) => {
    const icons = [FiTrophy, FiAward, FiStar, FiAward];
    const IconComponent = icons[index % icons.length];
    return IconComponent;
  };

  const getColorClasses = (index) => {
    const colors = [
      {
        bg: 'bg-yellow-50 dark:bg-yellow-900/20',
        border: 'border-yellow-200 dark:border-yellow-800',
        icon: 'text-yellow-600 dark:text-yellow-400',
        iconBg: 'bg-yellow-100 dark:bg-yellow-900/30',
      },
      {
        bg: 'bg-blue-50 dark:bg-blue-900/20',
        border: 'border-blue-200 dark:border-blue-800',
        icon: 'text-blue-600 dark:text-blue-400',
        iconBg: 'bg-blue-100 dark:bg-blue-900/30',
      },
      {
        bg: 'bg-green-50 dark:bg-green-900/20',
        border: 'border-green-200 dark:border-green-800',
        icon: 'text-green-600 dark:text-green-400',
        iconBg: 'bg-green-100 dark:bg-green-900/30',
      },
      {
        bg: 'bg-purple-50 dark:bg-purple-900/20',
        border: 'border-purple-200 dark:border-purple-800',
        icon: 'text-purple-600 dark:text-purple-400',
        iconBg: 'bg-purple-100 dark:bg-purple-900/30',
      },
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900">
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
              Achievements & Recognition
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Milestones and recognitions that mark my journey of growth and excellence in the field.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full mt-6"></div>
          </motion.div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = getIcon(index);
              const colors = getColorClasses(index);

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`${colors.bg} ${colors.border} border rounded-xl p-6 transition-all duration-300`}
                >
                  {/* Achievement Header */}
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`p-3 ${colors.iconBg} rounded-lg flex-shrink-0`}>
                      <Icon className={`w-6 h-6 ${colors.icon}`} />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {achievement.title}
                      </h3>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                        <span className="font-semibold text-primary-600 dark:text-primary-400">
                          {achievement.organization}
                        </span>
                        <div className="flex items-center space-x-1">
                          <FiCalendar className="w-4 h-4" />
                          <span>{achievement.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Achievement Description */}
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Achievement Badge */}
                  <div className="mt-4 inline-flex items-center space-x-2">
                    <div className={`w-2 h-2 ${colors.icon.replace('text-', 'bg-')} rounded-full`}></div>
                    <span className={`text-sm font-medium ${colors.icon}`}>
                      Recognized Achievement
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;