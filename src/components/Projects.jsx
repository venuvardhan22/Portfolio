import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi';
import portfolioData from '../data/portfolio.json';

const Projects = () => {
  const { projects } = portfolioData;
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

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

  const ProjectCard = ({ project, featured = false }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -10, scale: 1.02 }}
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 ${
        featured ? 'lg:col-span-2' : ''
      }`}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        {featured && (
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center space-x-1 bg-accent-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              <FiStar className="w-4 h-4" />
              <span>Featured</span>
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        {/* Project Links Overlay */}
        <div className="absolute bottom-4 right-4 flex space-x-2">
          {project.github && project.github !== "https://github.com/johndoe/blog-platform" && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
            >
              <FiGithub className="w-5 h-5" />
            </motion.a>
          )}
          {project.demo && project.id === 2 && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
            >
              <FiExternalLink className="w-5 h-5" />
            </motion.a>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          {project.title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Links */}
        <div className="flex space-x-4">
          {project.github && project.github !== "https://github.com/johndoe/blog-platform" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <FiGithub className="w-4 h-4" />
              <span>Code</span>
            </a>
          )}
          {project.demo && project.id === 2 && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <FiExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
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
              Featured Projects
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              A showcase of my recent work and side projects. Each project represents a unique challenge and learning experience.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full mt-6"></div>
          </motion.div>

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <div className="mb-16">
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                {featuredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} featured />
                ))}
              </div>
            </div>
          )}

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <div>
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center"
              >
                Other Projects
              </motion.h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          )}

          {/* View More Projects CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.a
              href={portfolioData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full font-medium shadow-lg transition-colors"
            >
              <FiGithub className="w-5 h-5" />
              <span>View More on GitHub</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;