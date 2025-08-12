import { motion } from 'framer-motion';
import { FiCode, FiTool } from 'react-icons/fi';
import { BiBrain } from 'react-icons/bi';
import { DiCode } from 'react-icons/di';
import portfolioData from '../data/portfolio.json';

const Skills = () => {
  const { skills } = portfolioData;

  const skillCategories = [
    {
      title: 'Web Development',
      icon: FiCode,
      skills: skills.web,
      color: 'primary',
      description: 'Full-stack web development technologies and frameworks'
    },
    {
      title: 'AI & ML',
      icon: BiBrain,
      skills: skills.ml_genai,
      color: 'purple',
      description: 'Machine Learning and Generative AI technologies'
    },
    {
      title: 'Tools & Technologies',
      icon: FiTool,
      skills: skills.tools,
      color: 'accent',
      description: 'Development tools and platforms'
    },
    {
      title: 'Programming Languages',
      icon: DiCode,
      skills: skills.languages,
      color: 'secondary',
      description: 'Core programming languages and markup'
    },
  ];

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

  const getColorClasses = (color) => {
    const colorMap = {
      primary: {
        bg: 'bg-primary-50 dark:bg-primary-900/20',
        border: 'border-primary-200 dark:border-primary-800',
        text: 'text-primary-600 dark:text-primary-400',
        skillBg: 'bg-primary-100 dark:bg-primary-900/30',
        skillText: 'text-primary-700 dark:text-primary-300',
      },
      purple: {
        bg: 'bg-purple-50 dark:bg-purple-900/20',
        border: 'border-purple-200 dark:border-purple-800',
        text: 'text-purple-600 dark:text-purple-400',
        skillBg: 'bg-purple-100 dark:bg-purple-900/30',
        skillText: 'text-purple-700 dark:text-purple-300',
      },
      secondary: {
        bg: 'bg-secondary-50 dark:bg-secondary-900/20',
        border: 'border-secondary-200 dark:border-secondary-800',
        text: 'text-secondary-600 dark:text-secondary-400',
        skillBg: 'bg-secondary-100 dark:bg-secondary-900/30',
        skillText: 'text-secondary-700 dark:text-secondary-300',
      },
      accent: {
        bg: 'bg-accent-50 dark:bg-accent-900/20',
        border: 'border-accent-200 dark:border-accent-800',
        text: 'text-accent-600 dark:text-accent-400',
        skillBg: 'bg-accent-100 dark:bg-accent-900/30',
        skillText: 'text-accent-700 dark:text-accent-300',
      },
      pink: {
        bg: 'bg-pink-50 dark:bg-pink-900/20',
        border: 'border-pink-200 dark:border-pink-800',
        text: 'text-pink-600 dark:text-pink-400',
        skillBg: 'bg-pink-100 dark:bg-pink-900/30',
        skillText: 'text-pink-700 dark:text-pink-300',
      },
    };
    return colorMap[color] || colorMap.primary;
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
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
              Skills & Technologies
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and the tools I use to bring ideas to life.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full mt-6"></div>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              const colors = getColorClasses(category.color);

              return (
                <motion.div
                  key={category.title}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`${colors.bg} ${colors.border} border rounded-xl p-6 transition-all duration-300`}
                >
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`p-2 ${colors.skillBg} rounded-lg`}>
                      <Icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className={`${colors.skillBg} ${colors.skillText} px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200 cursor-default`}
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>

                  {/* Skill Count */}
                  <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Skills
                      </span>
                      <span className={`text-sm font-semibold ${colors.text}`}>
                        {category.skills.length}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Always Learning & Growing
              </h3>
              <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                I'm constantly expanding my skill set and staying up-to-date with the latest technologies. 
                Currently exploring AI/ML integration, cloud architecture, and advanced React patterns.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;