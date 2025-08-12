import { motion } from 'framer-motion';
import { FiCamera, FiMusic, FiBookOpen, FiUsers, FiHeart, FiActivity } from 'react-icons/fi';
import portfolioData from '../data/portfolio.json';

const Hobbies = () => {
  const { hobbies } = portfolioData;

  const getCategoryIcon = (category) => {
    switch (category.toLowerCase()) {
      case 'creative':
        return FiCamera;
      case 'physical':
        return FiActivity;
      case 'intellectual':
        return FiBookOpen;
      case 'social':
        return FiUsers;
      default:
        return FiHeart;
    }
  };

  const getCategoryColor = (index) => {
    const colors = [
      {
        bg: 'bg-pink-50 dark:bg-pink-900/20',
        border: 'border-pink-200 dark:border-pink-800',
        text: 'text-pink-600 dark:text-pink-400',
        itemBg: 'bg-pink-100 dark:bg-pink-900/30',
        gradient: 'from-pink-500 to-rose-500',
      },
      {
        bg: 'bg-green-50 dark:bg-green-900/20',
        border: 'border-green-200 dark:border-green-800',
        text: 'text-green-600 dark:text-green-400',
        itemBg: 'bg-green-100 dark:bg-green-900/30',
        gradient: 'from-green-500 to-emerald-500',
      },
      {
        bg: 'bg-blue-50 dark:bg-blue-900/20',
        border: 'border-blue-200 dark:border-blue-800',
        text: 'text-blue-600 dark:text-blue-400',
        itemBg: 'bg-blue-100 dark:bg-blue-900/30',
        gradient: 'from-blue-500 to-indigo-500',
      },
      {
        bg: 'bg-purple-50 dark:bg-purple-900/20',
        border: 'border-purple-200 dark:border-purple-800',
        text: 'text-purple-600 dark:text-purple-400',
        itemBg: 'bg-purple-100 dark:bg-purple-900/30',
        gradient: 'from-purple-500 to-violet-500',
      },
    ];
    return colors[index % colors.length];
  };

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
    <section id="hobbies" className="py-20 bg-white dark:bg-gray-900">
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
              Hobbies & Interests
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Beyond code, I explore various interests that keep me creative, active, and constantly learning.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full mt-6"></div>
          </motion.div>

          {/* Hobbies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {hobbies.map((hobbyCategory, index) => {
              const Icon = getCategoryIcon(hobbyCategory.category);
              const colors = getCategoryColor(index);

              return (
                <motion.div
                  key={hobbyCategory.category}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`${colors.bg} ${colors.border} border rounded-xl p-6 transition-all duration-300`}
                >
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`p-3 ${colors.itemBg} rounded-lg`}>
                      <Icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {hobbyCategory.category}
                    </h3>
                  </div>

                  {/* Hobby Items */}
                  <div className="grid grid-cols-2 gap-3">
                    {hobbyCategory.items.map((hobby, hobbyIndex) => (
                      <motion.div
                        key={hobby}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + hobbyIndex * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className={`${colors.itemBg} ${colors.text} p-3 rounded-lg font-medium text-center text-sm transition-all duration-200 cursor-default hover:shadow-md`}
                      >
                        {hobby}
                      </motion.div>
                    ))}
                  </div>

                  {/* Category Count */}
                  <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {hobbyCategory.category} Interests
                      </span>
                      <span className={`text-sm font-semibold ${colors.text}`}>
                        {hobbyCategory.items.length} activities
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Personal Philosophy */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Life Philosophy
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  I believe in maintaining a balanced lifestyle that nurtures both professional growth and personal well-being. 
                  Each hobby contributes to my creativity, problem-solving abilities, and overall perspective as a developer.
                </p>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                  {hobbies.map((category, index) => {
                    const colors = getCategoryColor(index);
                    return (
                      <motion.div
                        key={category.category}
                        whileHover={{ scale: 1.05 }}
                        className={`bg-gradient-to-r ${colors.gradient} text-white p-4 rounded-lg`}
                      >
                        <div className="text-2xl font-bold mb-1">
                          {category.items.length}
                        </div>
                        <div className="text-sm opacity-90">
                          {category.category} Activities
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hobbies;