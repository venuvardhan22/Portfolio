import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';
import portfolioData from '../data/portfolio.json';

const Home = () => {
  const { personal, social } = portfolioData;

  const socialLinks = [
    { icon: FiGithub, href: social.github, label: 'GitHub' },
    { icon: FiLinkedin, href: social.linkedin, label: 'LinkedIn' },
    { icon: FiTwitter, href: social.twitter, label: 'Twitter' },
    { icon: FiInstagram, href: social.instagram, label: 'Instagram' },
  ];

  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            

            {/* Name and Title */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white"
              >
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                  {personal.name}
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium"
              >
                B. Tech Graduate in Computer Science
              </motion.p>
            </div>

            {/* Introduction */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              {personal.intro}
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex justify-center space-x-6"
            >
              
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="pt-8"
            >
              <motion.button
                onClick={scrollToAbout}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full font-medium shadow-lg transition-colors"
              >
                <span>Learn More About Me</span>
                <FiArrowDown className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-gray-400 dark:text-gray-600"
          >
            <FiArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;