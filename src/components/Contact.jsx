import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiExternalLink, FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiMapPin } from 'react-icons/fi';
import portfolioData from '../data/portfolio.json';

const Contact = () => {
  const { personal, social } = portfolioData;

  const contactMethods = [
    {
      icon: FiMail,
      label: 'Email',
      value: personal.email,
      color: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-blue-50 dark:bg-blue-900/20',
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: personal.phone,
      href: `tel:${personal.phone}`,
      color: 'text-green-600 dark:text-green-400',
      bg: 'bg-green-50 dark:bg-green-900/20',
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: personal.location,
      href: null,
      color: 'text-purple-600 dark:text-purple-400',
      bg: 'bg-purple-50 dark:bg-purple-900/20',
    },
  ];

  const socialLinks = [
    { icon: FiGithub, href: social.github, label: 'GitHub', color: 'hover:text-gray-900 dark:hover:text-gray-100' },
    { icon: FiLinkedin, href: social.linkedin, label: 'LinkedIn', color: 'hover:text-blue-600 dark:hover:text-blue-400' }
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

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
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
              Get In Touch
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full mt-6"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                  Feel free to reach out through any of the following channels. I typically respond within 24 hours.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  const content = (
                    <motion.div
                      whileHover={{ scale: 1.02, x: 10 }}
                      className={`${method.bg} p-4 rounded-xl border-l-4 border-primary-500 transition-all duration-300`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`p-2 bg-white dark:bg-gray-700 rounded-lg ${method.color}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">
                            {method.label}
                          </div>
                          <div className={`${method.color} font-medium`}>
                            {method.value}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {method.href ? (
                        <a href={method.href} className="block">
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* View Resume */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-primary-600 to-secondary-600 p-6 rounded-xl text-white"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">View My Resume</h4>
                    <p className="text-primary-100">
                      Check out my detailed experience and skills.
                    </p>
                  </div>
                  <motion.a
                    href={personal.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-colors"
                  >
                    <FiExternalLink className="w-6 h-6" />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>

            {/* Social Links & CTA */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Social Media */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Connect With Me
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                  Follow my journey and connect with me on social media platforms. I regularly share insights about development and technology.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`bg-white dark:bg-gray-900 p-4 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300`}
                      >
                        <div className="flex items-center space-x-3">
                          <Icon className="w-5 h-5" />
                          <span className="font-medium">{social.label}</span>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Call to Action */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiMail className="w-8 h-8 text-accent-600 dark:text-accent-400" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Let's Work Together
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
                  </p>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center space-x-2 bg-accent-600 hover:bg-accent-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    <FiMail className="w-4 h-4" />
                    <span>Email Me</span>
                  </motion.a>
                </div>
              </motion.div>

              {/* Availability Status */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 rounded-xl"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-700 dark:text-green-300 font-medium">
                    Available for new opportunities
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;