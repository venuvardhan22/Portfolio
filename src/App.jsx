import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Courses from './components/Courses';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useTheme from './hooks/useTheme';
import portfolioData from './data/portfolio.json';

function App() {
  const { theme } = useTheme();

  // Set page title and meta tags
  useEffect(() => {
    document.title = `${portfolioData.personal.name} - ${portfolioData.personal.title}`;
    
    // Update meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', portfolioData.personal.bio);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = portfolioData.personal.bio;
      document.getElementsByTagName('head')[0].appendChild(meta);
    }

    // Add Open Graph tags
    const ogTags = [
      { property: 'og:title', content: `${portfolioData.personal.name} - ${portfolioData.personal.title}` },
      { property: 'og:description', content: portfolioData.personal.bio },
      { property: 'og:image', content: portfolioData.personal.image },
      { property: 'og:url', content: portfolioData.personal.website || window.location.href },
      { property: 'og:type', content: 'website' },
    ];

    ogTags.forEach(tag => {
      const existingTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (existingTag) {
        existingTag.setAttribute('content', tag.content);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', tag.property);
        meta.content = tag.content;
        document.getElementsByTagName('head')[0].appendChild(meta);
      }
    });
  }, []);

  // Smooth scrolling behavior
  useEffect(() => {
    // Add smooth scroll behavior to html
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <AnimatePresence>
      <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
          <Header />
          
          <main>
            <Home />
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Achievements />
            <Courses />
            <Hobbies />
            <Contact />
          </main>

          <Footer />
        </div>

        {/* Loading animation overlay */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex items-center justify-center pointer-events-none"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary-600 dark:text-primary-400"
          >
            <div className="w-12 h-12 border-4 border-primary-200 dark:border-primary-800 border-t-primary-600 dark:border-t-primary-400 rounded-full animate-spin"></div>
          </motion.div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default App;