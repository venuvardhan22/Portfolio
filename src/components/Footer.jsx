import { motion } from 'framer-motion';
import { FiHeart, FiCode } from 'react-icons/fi';
import portfolioData from '../data/portfolio.json';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { personal } = portfolioData;

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Copyright */}
          <div className="flex items-center justify-center space-x-2 text-gray-300 mb-4">
            <span>&copy; {currentYear} {personal.name}. All rights reserved.</span>
          </div>

          {/* Made with Love */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center space-x-2 text-gray-400"
          >
            <span className="text-sm">Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FiHeart className="w-4 h-4 text-red-500" />
            </motion.div>
            <span className="text-sm">and</span>
            <FiCode className="w-4 h-4 text-blue-500" />
            <span className="text-sm">by {personal.name}</span>
          </motion.div>

          {/* Scroll to Top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Back to Top
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;