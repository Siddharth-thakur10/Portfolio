
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 overflow-hidden glass-dark">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* Logo and Tagline */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">Siddharth Thakur</h2>
            <p className="text-gray-400 mb-4">
              Software Development Engineer creating modern web experiences.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-portfolio-purple transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Connect */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <a 
              href="https://www.linkedin.com/in/siddharth-thakur10/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex  items-center text-gray-400 hover:text-portfolio-purple transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
            <a 
  href="https://github.com/Siddharth-thakur10" 
  target="_blank" 
  rel="noopener noreferrer"
  className="inline-flex items-center text-gray-400 hover:text-portfolio-purple transition-colors duration-200"
>
  <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.17c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.239 1.839 1.239 1.07 1.833 2.807 1.304 3.492.997.108-.775.419-1.304.762-1.604-2.665-.303-5.467-1.332-5.467-5.931 0-1.312.469-2.384 1.236-3.221-.124-.303-.535-1.525.117-3.176 0 0 1.008-.322 3.3 1.23a11.51 11.51 0 0 1 3-.404c1.02.005 2.044.138 3 .404 2.29-1.552 3.296-1.23 3.296-1.23.653 1.651.243 2.873.12 3.176.77.837 1.235 1.909 1.235 3.221 0 4.61-2.807 5.624-5.48 5.921.43.372.823 1.103.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.795 24 17.297 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
  GitHub
</a>

          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400">
            © {currentYear} Siddharth Thakur. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
